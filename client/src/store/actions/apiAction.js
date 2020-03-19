export const API_REQUEST = "[API] Request";

export const apiRequest = ({ body, method, url, onSuccess, onError }) => ({
  type: API_REQUEST,
  payload: {
    body,
    meta: { method, url, onSuccess, onError }
  }
});
