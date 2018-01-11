import withRepo from 'actions/utils/withRepo';

export default (dispatch, ownProps) => actionCreators => Object.keys(actionCreators).map(creatorKey => ({
  [creatorKey]: (...args) => dispatch(withRepo(ownProps.repoId)(actionCreators[creatorKey](...args))),
}));
