import { Input } from "@/components/Input";

export function LibrarySelect({ library, setLibrary }) {
  return (
    <Input
      value={library}
      onChange={event => setLibrary(event.target.value)}
      placeholder="Nome da biblioteca"
    />
  );
}
