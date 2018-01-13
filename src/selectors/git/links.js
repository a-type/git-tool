import { createSelector } from 'reselect';

const selectDomain = state => state.git.links || {};

export const createLinksSelector = repoId => createSelector(
  selectDomain,
  domain => domain[repoId] || {},
);

export const createParentsSelector = repoId => createSelector(
  createLinksSelector(repoId),
  links => links.parents || {},
);

export const createChildrenSelector = repoId => createSelector(
  createLinksSelector(repoId),
  links => links.children || {},
);

export const createEdgesSelector = repoId => createSelector(
  createChildrenSelector(repoId),
  children => Object.keys(children).reduce((list, node) =>
    [
      ...list,
      ...children[node].map(
        child => ({ from: node, to: child })
      )
    ],
    []
  ),
);

export default {
  createParentsSelector,
  createChildrenSelector,
  createEdgesSelector,
};
