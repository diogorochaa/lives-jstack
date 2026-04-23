import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { sleep } from "@/lib/utils";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { startTransition, useActionState, useState } from "react";
import { useFormStatus } from 'react-dom';

async function updateUserName(name) {
  await sleep(500);

  if (name === 'a') {
    throw new Error('Nome inválido.');
  }
}

export function Demo3() {
  const [error, setError] = useState(null);

  const [data, submitAction, isLoading] = useActionState(async (previousState, formData) => {
    const name = formData.get('name');

    try {
      await updateUserName(name);

      startTransition(() => {
        setError(null);
      });
    } catch (error) {
      startTransition(() => {
        setError(error);
      });
    }

    return { name };
  }, null);

  return (
    <div className="w-full max-w-lg">
      {data && (
        <h1 className="text-2xl font-semibold tracking-tight">
          Olá, {data.name}
        </h1>
      )}

      <form className="mt-6" action={submitAction}>
        <Input
          defaultValue={data?.name}
          placeholder="Nome"
          name="name"
        />

        <div className="mt-4 flex items-center gap-4">
          <Button>Salvar</Button>

          <LoadingState />
          {isLoading && (
            <div className="text-muted-foreground flex items-center gap-1">
              <Loader2Icon className="size-3 animate-spin" />
              <small>Salvando DENTRO do componente...</small>
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

function LoadingState() {
  const { pending } = useFormStatus();

  if (!pending) {
    return null;
  }

  return (
    <div className="text-muted-foreground flex items-center gap-1">
      <Loader2Icon className="size-3 animate-spin" />
      <small>Salvando EM UM FILHO...</small>
    </div>
  );
}
