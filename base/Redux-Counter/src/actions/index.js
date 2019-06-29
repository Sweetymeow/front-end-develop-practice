export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (param) => {
  return {
    type: INCREMENT,
    param
  }
};

export const decrement = (param) => {
  return {
    type: DECREMENT,
    param
  }
};
