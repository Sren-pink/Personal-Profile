import { AREAS } from "../../datas/ProjectData";

export default function FilterBar({ value, onChange }) {
  const buttons = [
    { key: "all",   label: "All" },
    { key: AREAS.UIUX,  label: "UI/UX" },
    { key: AREAS.WEBDEV, label: "Web Dev" },
    { key: AREAS.MOBILE, label: "Mobile Dev" },
    { key: AREAS.GRAPHICS, label: "Graphics" },
  ];

  return (
    <div className="pf-filter">
      {buttons.map(b => (
        <button
          key={b.key}
          className={`pf-chip ${value === b.key ? "is-active" : ""}`}
          onClick={() => onChange(b.key)}
          type="button"
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
