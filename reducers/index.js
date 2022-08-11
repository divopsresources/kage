/* @flow */
import { combineReducers } from "redux";
import { createMemoReducer } from "redux-promise-memo";

import apiStatus, * as apiStatusSelectors from "./apiStatus";
import auth, * as authSelectors from "./auth";
import tasks, * as tasksSelectors from "./tasks";
import ui, * as uiSelectors from "./ui";
import users, * as usersSelectors from "./users";

/**
 * Reducer
 */
export default combineReducers({
  _memo: createMemoReducer(),
  apiStatus,
  auth,
  tasks,
  ui,
  users,
});

/**
 * Selectors
 */
// apiStatus
export const getSendPasswordResetEmailStatus = (state: Object) =>
  apiStatusSelectors.getSendPasswordResetEmailStatus(state.apiStatus);
export const getReauthenticateStatus = (state: Object) =>
  apiStatusSelectors.getReauthenticateStatus(state.apiStatus);
export const getSignInStatus = (state: Object) =>
  apiStatusSelectors.getSignInStatus(state.apiStatus);
export const getSignInAnonymouslyStatus = (state: Object) =>
  apiStatusSelectors.getSignInAnonymouslyStatus(state.apiStatus);
export const getSignUpStatus = (state: Object) =>
  apiStatusSelectors.getSignUpStatus(state.apiStatus);
export const getUpdateEmailStatus = (state: Object) =>
  apiStatusSelectors.getUpdateEmailStatus(state.apiStatus);
export const getUpdatePasswordStatus = (state: Object) =>
  apiStatusSelectors.getUpdatePasswordStatus(state.apiStatus);
export const getUpdateUserStatus = (state: Object) =>
  apiStatusSelectors.getUpdateUserStatus(state.apiStatus);
export const getCreateTaskStatus = (state: Object) =>
  apiStatusSelectors.getCreateTaskStatus(state.apiStatus);
export const getUpdateTaskStatus = (state: Object) =>
  apiStatusSelectors.getUpdateTaskStatus(state.apiStatus);
// auth
export const getAuth = (state: Object) => authSelectors.getAuth(state.auth);
export const getCurrentUser = (state: Object) => authSelectors.getCurrentUser(state.auth);
export const getToken = (state: Object) => authSelectors.getToken(state.auth);
// tasks
export const getEditingId = (state: Object) => tasksSelectors.getEditingId(state.tasks);
export const getFilteredTasks = (state: Object, props: Object) =>
  tasksSelectors.getFilteredTasks(state.tasks, props);
export const getTags = (state: Object) => tasksSelectors.getTags(state.tasks);
export const getTask = (state: Object, id: string) => tasksSelectors.getTask(state.tasks, id);
export const getTotalCount = (state: Object) => tasksSelectors.getTotalCount(state.tasks);
export const getUpdatingId = (state: Object) => tasksSelectors.getUpdatingId(state.tasks);
// ui
export const getSelectedModal = (state: Object) => uiSelectors.getSelectedModal(state.ui);
// users
export const getUser = (state: Object, id: string) => usersSelectors.getUser(state.users, id);
export const getUsers = (state: Object) => usersSelectors.getUsers(state.users);
