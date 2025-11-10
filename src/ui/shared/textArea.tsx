export function TextArea({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
      <textarea
        className="border rounded px-2 py-1"
        {...props}
      />
  );
}

