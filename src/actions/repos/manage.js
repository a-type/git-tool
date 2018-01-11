import createActions from 'actions/util/create';

export default createActions({
  create: ({ name, dir }) => ({ name, dir }),
});
