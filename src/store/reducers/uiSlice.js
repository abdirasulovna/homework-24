import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/constants/general";
const TOGGLE = "TOGGLE";
export function toggle() {
  return {                                                                                
    type: TOGGLE,
  };
}

const initialState = {
  cartVisible: false,
  products: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle(state, action) {
      //автоматом будет создават экшен , где уже есть тип
      state.cartVisible = !state.cartVisible;
    },
    addProducts(state, { type, payload }) {
      state.products = payload;
    },
  },
});

// console.log(uiSlice.actions.toggle())

export const uiActions = uiSlice.actions;
export default uiSlice;

export const postHandler = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/products.json`, data);
      toast.success("Success");
    } catch (err) {
      toast.error(err.message);
    }
    dispatch(getDataHendler())
  };
};

export const getDataHendler = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/products.json`);
      const result = response.data;
      let newItem = [];
      for (const key in result) {
        newItem.push({
          id: key,
          ...result[key],
        });
      }
      dispatch(uiActions.addProducts(newItem));
    } catch (err) {
      toast(err.message);
    }
  };
};
