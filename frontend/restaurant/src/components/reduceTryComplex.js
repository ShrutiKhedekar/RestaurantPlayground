import { useReducer } from "react";

const innitalState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return innitalState;
    default:
      return state;
  }
};

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, innitalState);

  return (
    <div>
      <div>Count 1 = {count.firstCounter}</div>
      <div>Count 2 = {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Second
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Second
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter2;
