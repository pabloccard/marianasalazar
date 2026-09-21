import SectionImage from "@/components/SectionImage";
import styles from "../page.module.css";

export default function Gracias() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.contentContainer}>
        <SectionImage
          id="gracias"
          src="/gracias.webp"
          alt="Obrigado - Presets Exclusivos"
          width={1400}
          height={2538}
          priority={true} // Primeira e única imagem, deve carregar instantaneamente
          hotspots={[
            {
              id: "cta-gracias",
              top: "58.7864%",
              left: "15.7143%",
              width: "68.5714%",
              height: "7.6044%",
              href: "https://drive.google.com/drive/folders/1UW2-fSJiK3tW0_XiMScd2Rn4xtRZ_YyN?usp=drive_link",
              ariaLabel: "Acessar o Google Drive com os Presets",
            }
          ]}
        />
      </div>
    </main>
  );
}
