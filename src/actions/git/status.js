import createActions from 'actions/utils/create';

export default createActions({
  get: {
    call: () => ({}),
    done: status => ({ status }),
  },
}, { prefix: 'GIT_STATUS' });
