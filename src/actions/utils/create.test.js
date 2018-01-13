import create from 'actions/utils/create';

describe('the action creator helper', () => {
  test('creates action creators', () => {
    const actions = create({
      foo: a => ({ a }),
    });

    expect(actions.foo).toBeDefined();
    expect(actions.foo(0)).toEqual({ type: 'FOO', payload: { a: 0 }});
  });

  test('prefixes action types', () => {
    const actions = create({
      foo: a => ({ a }),
    }, { prefix: '@@foo' });

    expect(actions.foo).toBeDefined();
    expect(actions.foo(0)).toEqual({ type: '@@foo/FOO', payload: { a: 0 } });
  });

  test('handles nested actions', () => {
    const actions = create({
      foo: {
        bar: baz => ({ baz }),
      },
    });

    expect(actions.foo.bar).toBeDefined();
    expect(actions.foo.bar(0)).toEqual({ type: 'FOO/BAR', payload: { baz: 0 } });
  });
});
