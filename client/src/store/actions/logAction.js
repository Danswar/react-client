export const LOG = "[LOG] logger";

export const log = data => ({
  type: LOG,
  payload: data
});
