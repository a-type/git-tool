import createActions from 'actions/util/create';

export default createActions({
  get: {
    call: () => ({}),
    done: status => ({ status }),
  },
}, { prefix: 'GIT_STATUS' });
