import { useRef, useEffect, useState } from "react";
import "./ClickToPlayOnce.css";

export default function ClickToPlayOnce({ src, poster, className }) {
  const ref = useRef(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onEnded = () => {
      try { v.currentTime = Math.max(0, v.duration - 0.01); } catch {}
      v.pause();
      setPlayed(true);
      v.style.pointerEvents = "none"; // block restarts
    };
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  return (
    <video
      ref={ref}
      poster={poster}
      preload="auto"
      playsInline
      className={className ?? "video-click"}
      onClick={() => { if (!played) ref.current?.play(); }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
