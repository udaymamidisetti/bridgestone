import {
  ADD_CATEGORIES_REQUEST,
  ADD_CATEGORIES_REQUEST_SUCCESS,
  ADD_CATEGORIES_REQUEST_FAILURE,
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  REMOVE_CATEGORIES,
  REMOVE_CATEGORIES_SUCCESS,
  REMOVE_CATEGORIES_FAILURE,
  UPDATE_CATEGORIES_REQUEST,
  UPDATE_CATEGORIES_REQUEST_SUCCESS,
  UPDATE_CATEGORIES_REQUEST_FAILURE,
} from "../action/type";

const initialState = {
  category: [],
  loading: false,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ADD_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CATEGORIES_REQUEST_SUCCESS:
      return {
        ...state,
        category: [...state.category, action.payload],
        loading: false,
      };
    case ADD_CATEGORIES_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_CATEGORIES_SUCCESS:
      return {
        ...state,
        category: state.category.filter((item) => item._id !== action.payload),
        loading: false,
      };
    case REMOVE_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CATEGORIES_REQUEST_SUCCESS:
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
    case UPDATE_CATEGORIES_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
