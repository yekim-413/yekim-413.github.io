
export function Button({ className, children, ...props }: any) {
  return <button className={`bg-black text-white py-2 px-4 rounded-xl ${className}`} {...props}>{children}</button>;
}
