import { toast } from "react-toastify";
import {
  GET_NEWTIREDATA,
  GET_NEWTIREDATA_FAILURE,
  GET_NEWTIREDATA_SUCCESS,
  ADD_NEWTIREDATA_REQUEST,
  ADD_NEWTIREDATA_REQUEST_FAILURE,
  ADD_NEWTIREDATA_REQUEST_SUCCESS,
  REMOVE_NEWTIREDATA,
  REMOVE_NEWTIREDATA_SUCCESS,
  REMOVE_NEWTIREDATA_FAILURE,
  UPDATE_NEWTIREDATA_REQUEST,
  UPDATE_NEWTIREDATA_REQUEST_SUCCESS,
  UPDATE_NEWTIREDATA_REQUEST_FAILURE,
} from "./type";
import API from "../../config/config";

export const getNewtiredata = (action) => async (dispatch) => {
  dispatch({
    type: GET_NEWTIREDATA,
  });
  try {
    const res = await API.get(`${process.env.REACT_APP_BASE_URL}api/newtire/showAllNewTireData`);
    dispatch({
      type: GET_NEWTIREDATA_SUCCESS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: GET_NEWTIREDATA_FAILURE,
    });
    toast.error("Something went wrong !");
  }
};
export const addNewtiredataRequest =
  (formData, token, callback) => async (dispatch) => {
    dispatch({
      type: ADD_NEWTIREDATA_REQUEST,
    });

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("image", formData.image);
      payload.append("created_by", token._id);
      const res = await API.post(`${process.env.REACT_APP_BASE_URL}api/category`, payload);
      if (res.status === 200) {
        dispatch({
          type: ADD_NEWTIREDATA_REQUEST_SUCCESS,
          payload: res.data.data,
        });
      }
      return callback();
    } catch (e) {
      dispatch({
        type: ADD_NEWTIREDATA_REQUEST_FAILURE,
      });
      toast.error("Something went wrong !");
    }
  };

export const updateNewtiredataRequest =
  (formData, token, id, callback) => async (dispatch) => {
    dispatch({
      type: UPDATE_NEWTIREDATA_REQUEST,
    });

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("image", formData.image);
      payload.append("created_by", token._id);
      const res = await API.patch(`${process.env.REACT_APP_BASE_URL}api/newtire/${id}`, payload);
      if (res.status === 200) {
        dispatch({
          type: UPDATE_NEWTIREDATA_REQUEST_SUCCESS,
          payload: res.data.data,
        });
        toast.success("Category update Successfully");
      }
      return callback();
    } catch (e) {
      dispatch({
        type: UPDATE_NEWTIREDATA_REQUEST_FAILURE,
      });
      toast.error("Something went wrong !");
    }
  };
export const removeNewtiredata = (action) => async (dispatch) => {
  dispatch({
    type: REMOVE_NEWTIREDATA,
  });
  try {
    const res = await API.delete(`${process.env.REACT_APP_BASE_URL}api/newtire/${action.deleteId}`);
   if(res===200){
    dispatch({
      type: REMOVE_NEWTIREDATA_SUCCESS,
      payload: action.deleteId,
    });
    toast.error("Success  new tire rework deleted ")
}
    action.callback();
  } catch (e) {
    dispatch({
      type: REMOVE_NEWTIREDATA_FAILURE,
    });
    toast.error("Something went wrong !");
  }
};
