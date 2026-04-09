import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { sleep } from "./sleep";
import { type User } from "./types";

export function Posts() {
  const queryClient = useQueryClient();

  function handleMouseEnter() {
    queryClient.prefetchQuery({
      queryKey: ["users"],
      queryFn: async (): Promise<User[]> => {
        // throw new Error('Deu erro!');
        await sleep(500);
        const response = await fetch("http://localhost:3001/users");
        return response.json();
      },
    });
  }

  return (
    <pre>
      Posts
      <br />
      <br />
      <Link to="/" onMouseEnter={handleMouseEnter}>
        Ir para os usuários
      </Link>
    </pre>
  );
}
