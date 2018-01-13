export default action => action.meta ? (action.meta.repoId || null) : null;
