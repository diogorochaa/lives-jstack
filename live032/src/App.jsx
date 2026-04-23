import { Suspense } from "react";
import { Demo9 } from "./components/Demos/Demo9";

export function App() {
  return (
    <div className="p-4 w-full min-h-screen">
      <Suspense fallback={'Carregando...'}>
        <Demo9 />
      </Suspense>
    </div>
  );
}
