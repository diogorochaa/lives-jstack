import type { ComponentProps } from "react";
import { useCreateUser } from "./hooks/useCreateUser";
import { useUsers } from "./hooks/useUsers";

type FormSubmitEvent = Parameters<
  NonNullable<ComponentProps<"form">["onSubmit"]>
>[0];

export function Users() {
  const {
    users,
    refetch,
    isLoading: isUsersLoading,
    isFetching,
    error: usersError,
  } = useUsers();

  const { createUser, isLoading } = useCreateUser();

  async function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";

    if (!name || !email) {
      return;
    }

    try {
      const { id } = await createUser({
        name,
        email,
      });

      console.log(`Redireciona para: /users/${id}`);
      form.reset();
    } catch (error) {
      console.log((error as Error).toString());
    } finally {
      console.log("terminou de rodar");
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6">
      <div className="rounded-2xl border border-orange-100 bg-linear-to-br from-amber-50 via-orange-50 to-cyan-50 p-5 shadow-sm sm:p-7">
        <h1 className="text-2xl font-black tracking-tight text-slate-800 sm:text-3xl">
          Cadastro de Usuários
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Preencha os dados para adicionar um novo usuário.
        </p>

        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              Nome
            </label>
            <input
              id="name"
              className="w-full rounded-xl border border-orange-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              placeholder="Ex: Maria Silva"
              name="name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border border-orange-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              placeholder="email@dominio.com"
              name="email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 rounded-xl bg-slate-900 px-4 py-2.5 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50"
          onClick={() => refetch()}
        >
          Listar usuários
        </button>

        {!isUsersLoading && isFetching && (
          <small className="text-slate-500">Atualizando lista...</small>
        )}
      </div>

      {isUsersLoading && <h2 className="mt-4 text-slate-700">Carregando...</h2>}
      {usersError && (
        <h2 className="mt-4 text-red-500">{usersError.toString()}</h2>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <strong className="block text-slate-800">{user.name}</strong>
            <small className="text-slate-600">{user.email}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
