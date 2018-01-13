import createActions from 'actions/utils/create';

export default createActions({
  create: ({ name, dir }) => ({ name, dir }),
});
