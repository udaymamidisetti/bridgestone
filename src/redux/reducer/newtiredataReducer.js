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
  } from "../action/type";
  
  const initialState = {
    newtiredata: [],
    loading: false,
  };
  const newtiredataReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_NEWTIREDATA:
        return {
          ...state,
          loading: true,
        };
      case GET_NEWTIREDATA_SUCCESS:
        return {
          ...state,
          category: action.payload,
          loading: false,
        };
      case GET_NEWTIREDATA_FAILURE:
        return {
          ...state,
          loading: false,
        };
      case ADD_NEWTIREDATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_NEWTIREDATA_REQUEST_SUCCESS:
        return {
          ...state,
          category: [...state.category, action.payload],
          loading: false,
        };
      case ADD_NEWTIREDATA_REQUEST_FAILURE:
        return {
          ...state,
          loading: false,
        };
      case REMOVE_NEWTIREDATA:
        return {
          ...state,
          loading: true,
        };
      case REMOVE_NEWTIREDATA_SUCCESS:
        return {
          ...state,
          category: state.category.filter((item) => item._id !== action.payload),
          loading: false,
        };
      case REMOVE_NEWTIREDATA_FAILURE:
        return {
          ...state,
          loading: false,
        };
      case UPDATE_NEWTIREDATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_NEWTIREDATA_REQUEST_SUCCESS:
        let tempdata = [...state.category];
        let index = tempdata.findIndex((item) => item._id === action.payload._id);
        let x = { ...action.payload };
        if (index > -1) {
          tempdata[index] = {
            ...tempdata[index],
            x,
          };
        }
        return {
          ...state,
          category: [...state.category, action.payload],
          loading: false,
        };
      case UPDATE_NEWTIREDATA_REQUEST_FAILURE:
        return {
          ...state,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default newtiredataReducer;
  