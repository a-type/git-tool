import actions from 'actions/git/status';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.get.done.toString(): {
      return { ...state, [action.meta.repoId]: action.payload.status };
    }
    default: return state;
  }
};
