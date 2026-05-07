interface ProjectCodeSnippetProps {
  language: string;
  filename: string;
  code: string;
}

export function ProjectCodeSnippet({ language, filename, code }: ProjectCodeSnippetProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-(--border)">
      <div className="flex items-center gap-2 border-b border-(--border) bg-(--hero) px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 font-mono text-xs text-slate-400">{filename}</span>
      </div>
      <pre className="overflow-x-auto bg-slate-950 p-4">
        <code className={`language-${language} font-mono text-sm text-slate-200`}>{code}</code>
      </pre>
    </div>
  );
}
