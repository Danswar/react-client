export const SET_ERROR = "[Error] Set error";
export const CLEAR_ERROR = "[Error] Clear error";

export const setError = (code, msg) => ({
  type: SET_ERROR,
  payload: { code, msg }
});

export const clearError = () => ({
  type: CLEAR_ERROR
});
