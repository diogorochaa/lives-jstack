import { useState } from "react";

export function Contador() {
  // cria um estado chamado "count" com valor inicial 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Valor: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}
