export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex-1 h-px bg-white/10" />
      <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}
