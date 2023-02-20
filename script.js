const counterDiv = document.getElementById("counterDiv");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = (value) => {
  return {
    type: INCREMENT, // mandatory
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT, // mandatory
    payload: value,
  };
};

// create initial state
const initialState = {
  value: 0,
};

// create reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + action.payload };
  } else if (action.type === DECREMENT) {
    return { ...state, value: state.value - action.payload };
  } else {
    return state;
  }
};

// create store
const store = Redux.createStore(counterReducer);

// render to ui
const render = () => {
  const state = store.getState();
  counterDiv.innerText = state.value.toString();
};

// initially render elements to ui
render();

// subscribe to store changes
store.subscribe(render);

// button eventListener

incrementBtn.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementBtn.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
