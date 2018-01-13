import bindRepoActionCreators from './bindRepoActionCreators';

describe('bindRepoActionCreators', () => {
  test('applies repo id to actions', () => {
    const dispatch = jest.fn();
    const actions = bindRepoActionCreators({
      foo: a => ({ payload: { a } }),
    })(dispatch, { repoId: 'x' });

    actions.foo(0);

    expect(dispatch).toHaveBeenCalledWith({
      payload: { a: 0 },
      meta: { repoId: 'x' },
    });
  });
});
