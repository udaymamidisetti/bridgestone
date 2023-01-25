import { toast } from "react-toastify";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  ADD_CATEGORIES_REQUEST,
  ADD_CATEGORIES_REQUEST_FAILURE,
  ADD_CATEGORIES_REQUEST_SUCCESS,
  REMOVE_CATEGORIES,
  REMOVE_CATEGORIES_SUCCESS,
  REMOVE_CATEGORIES_FAILURE,
  UPDATE_CATEGORIES_REQUEST,
  UPDATE_CATEGORIES_REQUEST_SUCCESS,
  UPDATE_CATEGORIES_REQUEST_FAILURE,
} from "./type";
import API from "../../config/config";
import baseUrl from "../../config/url";

export const getCategories = (action) => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIES,
  });
  try {
    const res = await API.get(`${baseUrl}api/category`);
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CATEGORIES_FAILURE,
    });
    toast.error("Something went wrong !");
  }
};
export const addCategoryRequest =
  (formData, token, callback) => async (dispatch) => {
    dispatch({
      type: ADD_CATEGORIES_REQUEST,
    });

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("image", formData.image);
      payload.append("created_by", token._id);
      const res = await API.post(`${baseUrl}api/category`, payload);
      if (res.status === 200) {
        dispatch({
          type: ADD_CATEGORIES_REQUEST_SUCCESS,
          payload: res.data.data,
        });
      }
      return callback();
    } catch (e) {
      dispatch({
        type: ADD_CATEGORIES_REQUEST_FAILURE,
      });
      toast.error("Something went wrong !");
    }
  };

export const updateCategoryRequest =
  (formData, token, id, callback) => async (dispatch) => {
    dispatch({
      type: UPDATE_CATEGORIES_REQUEST,
    });

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("image", formData.image);
      payload.append("created_by", token._id);
      const res = await API.patch(`${baseUrl}api/category/${id}`, payload);
      if (res.status === 200) {
        dispatch({
          type: UPDATE_CATEGORIES_REQUEST_SUCCESS,
          payload: res.data.data,
        });
        toast.success("Category update Successfully");
      }
      return callback();
    } catch (e) {
      dispatch({
        type: UPDATE_CATEGORIES_REQUEST_FAILURE,
      });
      toast.error("Something went wrong !");
    }
  };
export const removeCategory = (action) => async (dispatch) => {
  dispatch({
    type: REMOVE_CATEGORIES,
  });
  try {
    const res = await API.delete(`${baseUrl}api/category/${action.deleteId}`);
    dispatch({
      type: REMOVE_CATEGORIES_SUCCESS,
      payload: action.deleteId,
    });
    action.callback();
  } catch (e) {
    dispatch({
      type: REMOVE_CATEGORIES_FAILURE,
    });
    toast.error("Something went wrong !");
  }
};
