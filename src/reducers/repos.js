import actions from 'actions/repos/manage';

const initialState = {
  default: {
    name: 'git-tool',
    dir: 'C:\\Users\\a-typ\\Documents\\Git\\git-tool',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.create.toString():
      return {
        ...state,
        [action.payload.id]: state.payload,
      };
    default:
      return state;
  }
}
