import { mapValues } from 'lodash';
import withRepo from 'actions/utils/withRepo';

export default actionCreators => (dispatch, ownProps) => mapValues(actionCreators, creator => (
  (...args) => dispatch(withRepo(ownProps.repoId)(creator(...args)))
));
