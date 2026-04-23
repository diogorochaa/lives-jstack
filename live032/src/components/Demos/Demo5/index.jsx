import { Suspense, use, useActionState } from "react";

import { Button } from "@/components/Button";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { store } from "@/lib/Store";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";

function LoadingState() {
  return (
    <div className="mt-6 flex items-center gap-2">
      <Loader2Icon className="animate-spin size-6" />
      <h1>Carregando...</h1>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="mt-6 flex items-center gap-2 text-destructive">
      <TriangleAlertIcon className="size-6" />
      <h1>Erro ao carregar os dados da loja!</h1>
    </div>
  );
}

export function Demo5() {
  return (
    <div className="w-full max-w-xl mx-auto my-10 p-4">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">
          Editar Loja
        </h1>
      </header>

      <Suspense fallback={<LoadingState />}>
        <ErrorBoundary fallback={<ErrorState />}>
          <Form fetchStore={store.fetchData()} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export function Form({ fetchStore }) {
  const data = use(fetchStore);

  const [storeData, submitAction, isPending] = useActionState(
    async (_, formData) => {
      const data = formData.entries().reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value
      }), {});

      const newStoreData = await store.update(data);

      return newStoreData;
    },
    data,
  );

  return (
    <div className="mt-6">
      <form action={submitAction} className="mt-3">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Nome</Label>
            <Input defaultValue={storeData.name} name="name" />
          </div>

          <div className="space-y-1.5">
            <Label>Website</Label>
            <Input defaultValue={storeData.website} name="website" />
          </div>
        </div>

        <div className="flex justify-end mt-6 items-center gap-4">
          {isPending && (
            <div className="flex items-center text-muted-foreground gap-1">
              <Loader2Icon className="size-4 animate-spin" />
              <small>Salvando...</small>
            </div>
          )}

          <Button size="sm" disabled={isPending}>
            Salvar Alterações
          </Button>
        </div>
      </form>
    </div>
  );
}
