import logActions from 'actions/git/log';
import { invert, assignWith } from 'lodash';

const initialState = {};

const getParentToChildRelationships = log => log.all.reduce(
  (map, commit, idx) => {
    if (idx === 0) {
      return map;
    }
    return {
      ...map,
      [commit.hash]: log.all[idx - 1].hash,
    };
  },
  {},
);

const mergeLists = (existing, incoming) => assignWith(
  existing,
  incoming,
  (existingValue, incomingValue, key) =>
    (existingValue || []).concat(incomingValue).filter(Boolean)
);

const handleLog = (state, action) => {
  const children = getParentToChildRelationships(action.payload.log);
  // NOTE: plain invert should be safe here since log is linear.
  const parents = invert(children);
  return {
    ...state,
    children: mergeLists(state.children, children),
    parents: mergeLists(state.parents, parents),
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case logActions.get.done.toString():
      return {
        ...state,
        [action.meta.repoId]: {
          ...state[action.meta.repoId],
          ...handleLog(state[action.meta.repoId] || { children: [], parents: [] }, action)
        },
      };
    default:
      return state;
  }
}
