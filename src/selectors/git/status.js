import { createSelector } from 'reselect';

export const selectDomain = state => state.git.status;

export const selectStatus = repoId => createSelector(
  selectDomain,
  domain => domain[repoId],
);
