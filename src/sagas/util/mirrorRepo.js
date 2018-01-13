import hasRepo from 'actions/utils/hasRepo';
import getRepo from 'actions/utils/getRepo';
import withRepo from 'actions/utils/withRepo';

export default function mirrorRepo(saga) {
  return function*(action) {
    if (!hasRepo()(action)) {
      yield* saga(action);
      return;
    }

    const repoId = getRepo(action);

    const iterator = saga(action);
    let lastResult;

    while (true) {
      const next =
        lastResult instanceof Error
          ? iterator.throw(lastResult)
          : iterator.next(lastResult);

      if (next.done) {
        return;
      }

      try {
        if (next.value.PUT) {
          lastResult = yield {
            ...next.value,
            PUT: {
              ...next.value.PUT,
              action: withRepo(repoId)(next.value.PUT.action),
            },
          };
        } else {
          lastResult = yield next.value;
        }
      } catch (err) {
        lastResult = err;
      }
    }
  };
}
