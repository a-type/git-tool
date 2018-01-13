import { createSelector } from 'reselect';

const selectDomain = state => state.git.commits || {};

export const createCommitsSelector = repoId => createSelector(
  selectDomain,
  domain => domain[repoId] || {},
);

export const createCommitsListSelector = repoId => createSelector(
  createCommitsSelector(repoId),
  commits => Object.values(commits),
);

export const createCommitsNodeListSelector = repoId => createSelector(
  createCommitsListSelector(repoId),
  commits => commits.map(commit => ({ id: commit.hash, label: commit.message })),
);

export const createCommitSelector = (repoId, commitHash) => createSelector(
  createCommitsSelector(repoId),
  commits => commits[commitHash],
);

export default {
  createCommitsSelector,
  createCommitsListSelector,
  createCommitsNodeListSelector,
  createCommitSelector,
};
