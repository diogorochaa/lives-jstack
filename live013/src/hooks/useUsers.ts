import { useQuery } from "@tanstack/react-query";
import { sleep } from "../sleep";
import type { User } from "../types";

export function useUsers() {
  const { data, refetch, isLoading, isFetching, error } = useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      await sleep(500);
      const response = await fetch("http://localhost:3001/users");
      return response.json();
    },
  });

  return {
    users: data ?? [],
    refetch,
    isLoading,
    isFetching,
    error,
  };
}
