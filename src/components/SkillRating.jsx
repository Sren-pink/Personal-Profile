// src/components/SkillRating.jsx
import { useId } from "react";

export default function SkillRating({
  name,
  rating = 0,  
  outOf = 5,
  size = 20,
  empty = "#DAE4F0",
  filled = "#B5CFEA",
  className = "",
}) {
  const r = Math.max(0, Math.min(rating, outOf));
  const stars = Array.from({ length: outOf }, (_, i) => i);

  return (
    <div className={`skill-card ${className}`} aria-label={`${name} ${r}/${outOf}`}>
      {/* top: skill name */}
      <div className="skill-name">{name}</div>

      {/* bottom: stars */}
      <div className="skill-stars">
        {stars.map((i) => {
          const idx = i + 1;
          const full = r >= idx;
          const half = !full && r > i && r < idx;
          return (
            <Star
              key={i}
              size={size}
              empty={empty}
              filled={filled}
              mode={full ? "full" : half ? "half" : "empty"}
            />
          );
        })}
      </div>
    </div>
  );
}

function Star({ size, empty, filled, mode = "empty" }) {
  const cid = useId(); // unique clip id per instance
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className="star"
    >
      {/* empty base */}
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill={empty}
      />
      {mode !== "empty" && (
        mode === "full" ? (
          <path
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
            fill={filled}
          />
        ) : (
          <>
            <clipPath id={`half-${cid}`}>
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
            <path
              d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
              fill={filled}
              clipPath={`url(#half-${cid})`}
            />
          </>
        )
      )}
    </svg>
  );
}
