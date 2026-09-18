import Image from "next/image";
import Link from "next/link";
import styles from "./SectionImage.module.css";

export interface Hotspot {
  id: string;
  top: string; // e.g. "82%"
  left: string; // e.g. "8%"
  width: string; // e.g. "84%"
  height: string; // e.g. "7%"
  href: string; // e.g. "#checkout" or "https://..."
  target?: "_blank" | "_self";
  ariaLabel?: string;
}

export interface SectionImageProps {
  id?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  hotspots?: Hotspot[];
  children?: React.ReactNode;
}

export default function SectionImage({
  id,
  src,
  alt,
  width,
  height,
  priority = false,
  hotspots = [],
  children,
}: SectionImageProps) {
  return (
    <section id={id} className={styles.sectionWrapper}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        sizes="(max-width: 640px) 100vw, 540px"
        className={styles.sectionImage}
      />

      {children}

      {hotspots.map((spot) => {
        const isExternal = spot.href.startsWith("http");
        return (
          <Link
            key={spot.id}
            href={spot.href}
            target={spot.target || (isExternal ? "_blank" : "_self")}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={spot.ariaLabel || "Ação na imagem"}
            className={styles.hotspot}
            style={{
              top: spot.top,
              left: spot.left,
              width: spot.width,
              height: spot.height,
            }}
          />
        );
      })}
    </section>
  );
}
