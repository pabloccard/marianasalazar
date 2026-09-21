"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import styles from "./BeforeAfterSlider.module.css";

export interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number; // 0 to 100
  presetName?: string; // Novo: Nome do preset para a tag
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  initialPosition = 50,
  presetName,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(initialPosition);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const directionRef = useRef<"horizontal" | "vertical" | null>(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  }, []);

  // --- MOUSE (Desktop) ---
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    updatePosition(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };
  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // --- TOUCH (Mobile) ---
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startXRef.current = touch.clientX;
      startYRef.current = touch.clientY;
      directionRef.current = null;
      isDraggingRef.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];

      // Decidir a direção no primeiro movimento significativo
      if (directionRef.current === null) {
        const dx = Math.abs(touch.clientX - startXRef.current);
        const dy = Math.abs(touch.clientY - startYRef.current);
        if (dx < 5 && dy < 5) return; // movimento muito pequeno, ignorar

        directionRef.current = dx > dy ? "horizontal" : "vertical";
        if (directionRef.current === "horizontal") {
          isDraggingRef.current = true;
        }
      }

      if (directionRef.current === "vertical") return; // scroll normal

      // Horizontal: bloquear scroll e mover slider
      e.preventDefault(); // FUNCIONA aqui porque passive: false
      updatePosition(touch.clientX);
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
      directionRef.current = null;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false }); // CHAVE!
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className={styles.sliderWrapper}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* AFTER image (full, background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className={styles.sliderImage}
        loading="lazy"
      />

      {/* BEFORE image (clipped) */}
      <img
        src={beforeImage}
        alt={beforeLabel}
        className={`${styles.sliderImage} ${styles.beforeImage}`}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        loading="lazy"
      />

      {/* Divider line and floating arrows */}
      <div
        className={styles.dividerLine}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={styles.handleArrows}>
          {/* Seta Esquerda */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          {/* Seta Direita */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Preset Tag (Optional) */}
      {presetName && (
        <div className={styles.presetTag}>
          {presetName}
        </div>
      )}
    </div>
  );
}
