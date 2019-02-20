import { actions } from '../actions/configuration';

const initialState = {
  stack: [],
  current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CONFIGURATION_PUSH:
      return {
        ...state,
        current: { name: action.to },
        stack: [ ...state.stack, { name: action.previous } ]
      };
    case actions.CONFIGURATION_POP:
      const newStack = [...state.stack];
      const current = popRecursively(newStack);
      
      return {
        ...state,
        current,
        stack: newStack
      };
    case actions.CONFIGURATION_CLEAR:
      return {
        ...state,
        stack: [],
        current: null
      };
    default: return state;
  }
};


function popRecursively(stack) {
  if (Array.isArray(stack) && stack.length > 0) {
    const current = stack.pop();
    return popRecursively(current);
  } else {
    return stack;
  }
}

