export function Demo8() {
  const article = 'Artigo 123';

  return (
    <div className="w-full max-w-xl mx-auto my-10 p-4">
      <title>{article}</title>
      <meta name="description" content={article} />
      <link rel="stylesheet" href="/index.css" />
      <link rel="stylesheet" href="/index2.css" />

      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">
          {article}
        </h1>
      </header>
    </div>
  );
}
