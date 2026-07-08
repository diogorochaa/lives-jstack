import { Button } from "@views/components/ui/button";
import { Input } from "@views/components/ui/input";

export function Home() {
  return (
    <div>
      <Input placeholder="Submit" />
      <Button>
        Enviar
      </Button>
    </div>
  );
}