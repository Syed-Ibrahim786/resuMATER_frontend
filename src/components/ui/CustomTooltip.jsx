export function CustomTooltip({ active, payload, label }) {
  if (!active || !payload) return null;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-md">
      <p className="text-xs text-neutral-500 mb-1">{label}</p>

      {payload.map((item) => (
        <div
          key={item.dataKey}
          className="flex items-center gap-2 text-sm"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="font-medium">{item.dataKey}</span>
          <span className="ml-auto font-semibold">
            {item.value}/100
          </span>
        </div>
      ))}
    </div>
  );
}
