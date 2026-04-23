import { Button } from "@/components/Button";
import { useState } from "react";
import { preload } from 'react-dom';

const imgURL = 'https://cdn.jstack.com.br/lives/thumbnails/2bihVwNHn6LPqImV1BEMWK8EJmu.jpg';

export function Demo9() {
  const [hidden, setHidden] = useState(true);

  function handleMouseEnter() {
    preload(imgURL, { as: "image" });
  }

  return (
    <div>
      <Button
        onClick={() => setHidden(false)}
        onMouseEnter={handleMouseEnter}
      >
        Revelar imagem
      </Button>

      {!hidden && (
        <img src={imgURL} />
      )}
    </div>
  );
}
