import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { sleep } from "@/lib/utils";
import { Loader2Icon, SendIcon } from "lucide-react";
import { startTransition, useActionState, useOptimistic, useState } from "react";
import { useFormStatus } from 'react-dom';

export function Demo4() {
  const [serverMessages, setServerMessages] = useState([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    serverMessages,
    (prevMessages, newMessage) => {
      return prevMessages.concat(newMessage);
    },
  );

  const [, submitAction] = useActionState(
    async (previousMessages, formData) => {
      const id = window.crypto.randomUUID();
      const text = formData.get('text');
      const message = { id, text };

      addOptimisticMessage({
        ...message,
        sending: true,
      });

      await sleep(); // POST para criar a mensagem
      await sleep(100); // GET para pegar a lista atualizada

      startTransition(() => {
        setServerMessages(prevState => prevState.concat(message));
      });
    },
    [],
  );

  console.log(optimisticMessages)

  return (
    <div className="w-full max-w-lg">
      <div className="space-y-2">
        {optimisticMessages.map(message => (
          <div key={message.id} className="bg-red-zinc-200 border p-2 rounded-md">
            {message.text}
            {message.sending && (
              <em className="text-muted-foreground block text-xs">
                Enviando...
              </em>
            )}
          </div>
        ))}
      </div>

      <form className="mt-6" action={submitAction}>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Escreva sua mensagem..."
            name="text"
          />

          <Button>
            <SendIcon className="size-6"/>
          </Button>
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {!pending && <SendIcon className="size-6"/>}
      {pending && <Loader2Icon className="size-6 animate-spin"/>}
    </Button>
  );
}
