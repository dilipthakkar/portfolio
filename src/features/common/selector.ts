import { createSelector } from "reselect";
const common = (state) => state.common;

export const loadingSelector = createSelector(
  common,
  (data) => data.loading
);

export const errorSelector = createSelector(common, (data) => data.error);
export const messageSelector = createSelector(common, (data) => data.message);
