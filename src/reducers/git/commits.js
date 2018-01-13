import logActions from 'actions/git/log';

const initialState = {};

const getCommits = log => log.all.reduce((map, commit) => ({ ...map, [commit.hash]: commit }), {});

export default (state = initialState, action) => {
  switch (action.type) {
    case logActions.get.done.toString():
      return {
        ...state,
        [action.meta.repoId]: {
          ...state[action.meta.repoId],
          ...getCommits(action.payload.log),
        },
      };
    default:
      return state;
  }
}
