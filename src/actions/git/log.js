import createActions from 'actions/utils/create';

export default createActions({
  get: {
    call: (branch = 'master') => ({ branch }),
    done: log => ({ log }),
  },
}, { prefix: 'GIT_LOG' });
