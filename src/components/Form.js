import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { postHandler, uiActions } from "../store/reducers/uiSlice";

const initialState = { title: "", price: "", description: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "title":
      return { ...state, title: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatchValue] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postHandler(state));
  };
  const changeHeandler = (key) => {
    return (e) => {
      dispatchValue({ type: key, payload: e.target.value });
    };
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={state.title}
        onChange={changeHeandler("title")}
        required
      />
      <input
        type="text"
        value={state.price}
        onChange={changeHeandler("price")}
        required
      />
      <input
        type="text"
        value={state.description}
        onChange={changeHeandler("description")}
        required
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
