import { createSelector } from 'reselect';

const selectDomain = state => state.repos;

export const createRepoSelector = id => createSelector(
  selectDomain,
  domain => domain[id],
);

export const createDirSelector = id => createSelector(
  createRepoSelector(id),
  repo => repo.dir,
);

export default {
  createRepoSelector,
  createDirSelector,
};
