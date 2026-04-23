import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { sleep } from "@/lib/utils";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { useState, useTransition } from "react";

async function updateUserName(name) {
  await sleep(2000);

  if (name === 'a') {
    throw new Error('Nome inválido.');
  }
}

export function Demo2() {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const [isLoading, startTransition] = useTransition();

  // A partir de agora, TODA FUNÇÃO que triggar uma TRANSITION
  // é chamada de ACTION
  async function handleSubmit(event) {
    startTransition(async () => {
      try {
        event.preventDefault();

        await updateUserName(name);

        startTransition(() => {
          setData({ name });
          setError(null);
        });
      } catch (error) {
        startTransition(() => {
          setError(error);
        });
      }
    });
  }

  return (
    <div className="w-full max-w-lg">
      {data && (
        <h1 className="text-2xl font-semibold tracking-tight">
          Olá, {data.name}
        </h1>
      )}

      <form className="mt-6" onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />

        <div className="mt-4 flex items-center gap-4">
          <Button>Salvar</Button>

          {isLoading && (
            <div className="text-muted-foreground flex items-center gap-1">
              <Loader2Icon className="size-3 animate-spin" />
              <small>Salvando...</small>
            </div>
          )}

          {error && (
            <div className="text-destructive flex items-center gap-1">
              <TriangleAlertIcon className="size-3" />
              <small>Erro ao salvar os dados!</small>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
