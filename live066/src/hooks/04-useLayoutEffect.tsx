import { useLayoutEffect, useRef, useState } from "react";

export function ExemploUseLayoutEffect() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Executa ANTES do browser pintar na tela
  useLayoutEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "200px", padding: "20px", background: "#ddd" }}
      >
        Caixa
      </div>

      <p>Largura: {width}px</p>
    </div>
  );
}
