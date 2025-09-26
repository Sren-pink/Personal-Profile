// src/components/common/AreaBadge.jsx
import { AREA_LABELS } from "../../datas/ProjectData";
export default function AreaBadge({ area, className = "" }) {
  const label = AREA_LABELS[area] ?? area;
  return <span className={`area-badge ${className}`}>{label}</span>;
}
