import { useMutation } from "@tanstack/react-query";
import { sleep } from "../sleep";
import type { User } from "../types";

export function useCreateUser() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({
      name,
      email,
    }: {
      name: string;
      email: string;
    }): Promise<User> => {
      await sleep(1500);

      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      return response.json();
    },
  });

  return {
    createUser: mutateAsync,
    isLoading: isPending,
  };
}
