export default function Blobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
    >
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-sky-500/25 blur-3xl animate-blob [animation-delay:-5s]" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl animate-blob [animation-delay:-9s]" />
    </div>
  );
}
