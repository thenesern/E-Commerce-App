import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./authSlice";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productSlice";
import {
  addUserFailure,
  addUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUserFailure,
  getUserStart,
  getUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./userSlice";
import {
  getOrdersFailure,
  getOrdersStart,
  getOrdersSuccess,
} from "./orderSlice";

export const login = async (dispatch, auth) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", auth);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, auth) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", auth);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getAllOrders = async (dispatch) => {
  dispatch(getOrdersStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getOrdersSuccess(res.data));
  } catch (err) {
    dispatch(getOrdersFailure());
  }
};
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const updateUser = async (dispatch, user) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.patch(`/users/${user.id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const addProduct = async (dispatch, product) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/users`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};
