import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { useImperativeHandle, useRef } from "react";

function Input({ ref }) {
  useImperativeHandle(ref, () => ({
    print() {
      console.log('print from input');
    }
  }), []);

  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      )}
    />
  );
}

export function Demo7() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.print();
  }

  return (
    <div>
      <Input ref={ref} />

      <Button onClick={handleClick}>
        Enviar
      </Button>
    </div>
  );
}
