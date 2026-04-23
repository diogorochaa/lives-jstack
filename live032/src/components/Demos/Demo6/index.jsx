import { Button } from '@/components/Button';
import { createContext, use, useState } from 'react';

const ThemeContext = createContext();

export function Demo6() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <div className="w-full max-w-xl mx-auto my-10 p-4">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">
            Context
          </h1>
        </header>

        <ThemeToggler />
      </div>
    </ThemeContext>
  );
}

export function ThemeToggler() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    const context = use(ThemeContext);

    console.log(context);
  }

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleClick}>
        Counter
      </Button>

      <span>
      </span>
    </div>
  );
}
