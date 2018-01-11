export default repoId => action => ({
  ...action,
  meta: {
    ...action.meta,
    repoId,
  },
});
