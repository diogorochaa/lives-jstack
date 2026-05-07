import { useRef } from "react";

export function ExemploUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focarInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Digite algo..." />

      <button onClick={focarInput}>Focar no input</button>
    </div>
  );
}
