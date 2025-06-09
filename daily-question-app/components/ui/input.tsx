
export function Input({ className, ...props }: any) {
  return <input className={`border border-gray-300 rounded-xl px-4 py-2 w-full ${className}`} {...props} />;
}
