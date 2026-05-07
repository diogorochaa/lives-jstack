import { useReducer } from "react";

// 1. Estado inicial
const initialState = { count: 0 };

// 2. Reducer (função pura que define como o estado muda)
function reducer(state: typeof initialState, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function ContadorReducer() {
  // 3. useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Valor: {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </div>
  );
}
