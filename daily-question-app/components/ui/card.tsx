
export function Card({ className, children }: any) {
  return <div className={`bg-white rounded-2xl shadow ${className}`}>{children}</div>;
}
export function CardContent({ className, children }: any) {
  return <div className={className}>{children}</div>;
}
