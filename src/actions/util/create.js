import { constant } from 'change-case';
import { isObject, isArray, identity } from 'lodash';

const returnObj = () => ({});

const asString = (fn, string) => {
  fn.toString = () => string;
  return fn;
};

const createActions = (actionMap, { prefix }) => Object.keys(actionMap).map(key => {
  const prependType = `${prefix}/`;
  const type = `${prependType}${constant(key)}`;
  const action = actionMap[key];
  if (isObject(action)) {
    return createActions(action, { prefix: prependType });
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
