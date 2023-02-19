const counterDiv = document.getElementById("counterDiv");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

// create initial state
const initialState = {
  value: 0,
};

// create reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { ...state, value: state.value + 1 };
  } else if (action.type === "decrement") {
    return { ...state, value: state.value - 1 };
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
  store.dispatch({
    type: "increment",
  });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
