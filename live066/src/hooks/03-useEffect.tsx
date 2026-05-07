import { useEffect, useState } from "react";

export function ExemploUseEffect() {
  const [count, setCount] = useState(0);

  // Executa sempre que "count" mudar
  useEffect(() => {
    console.log("O count mudou:", count);
  }, [count]);

  return (
    <div>
      <p>Valor: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
