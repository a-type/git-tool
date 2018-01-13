import { constant } from 'change-case';
import { isPlainObject, isArray, identity, mapValues } from 'lodash';

const returnObj = () => ({});

const asString = (fn, string) => {
  fn.toString = () => string;
  return fn;
};

const createActions = (actionMap, { prefix } = { prefix: '' }) => mapValues(actionMap, (action, key) => {
  const prependType = prefix ? `${prefix}/` : '';
  const type = `${prependType}${constant(key)}`;
  if (isPlainObject(action)) {
    return createActions(action, { prefix: type });
  } else if (isArray(action)) {
    return asString((...args) => ({
      type,
      payload: (action[0] || identity)(...args),
      meta: (action[1] || returnObj)(...args),
    }), type);
  } else {
    return asString((...args) => ({
      type,
      payload: action(...args),
    }), type);
  }
});

export default createActions;
