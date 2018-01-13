export default repoId => action => repoId
  ? action.meta && action.meta.repoId === repoId
  : action.meta && !!action.meta.repoId;
