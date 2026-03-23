export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex-1 h-px" style={{ background: "rgba(167,139,250,0.35)" }} />
      <h2
        className="text-base font-semibold uppercase text-primary"
        style={{ letterSpacing: "0.7px" }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: "rgba(167,139,250,0.35)" }} />
    </div>
  );
}
