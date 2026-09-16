import SectionImage from "@/components/SectionImage";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.contentContainer}>


        {/* SEÇÃO 01 - Dobra Principal / Hero */}
        <SectionImage
          id="sessao-01"
          src="/sections/SESSAO01.webp"
          alt="Presets Exclusivos - Seção Principal"
          width={1400}
          height={2271}
          priority={true}
          // Exemplo de como adicionar botões clicáveis em cima da imagem do Figma:
          // hotspots={[
          //   {
          //     id: "cta-hero",
          //     top: "85%",
          //     left: "10%",
          //     width: "80%",
          //     height: "8%",
          //     href: "https://pay.hotmart.com/...",
          //     ariaLabel: "Garantir Meus Presets Agora",
          //   }
          // ]}
        />

        {/* SEÇÃO 02 - Detalhes, Benefícios e Oferta */}
        <SectionImage
          id="sessao-02"
          src="/sections/SESSAO02.webp"
          alt="Presets Exclusivos - Detalhes da Oferta"
          width={1400}
          height={5209}
          priority={false}
        >
          {/* PRIMEIRO SLIDER ANTES/DEPOIS (Retângulo Superior) */}
          <div style={{
            position: 'absolute',
            top: '24.4961%',
            left: '12.9286%',
            width: '74.1429%',
            height: '24.8608%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/01ANTES.webp"
              afterImage="/01DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
            />
          </div>

          {/* SEGUNDO SLIDER ANTES/DEPOIS (Retângulo Inferior) */}
          <div style={{
            position: 'absolute',
            top: '70.4358%',
            left: '12.9286%',
            width: '74.1429%',
            height: '24.8608%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/02ANTES.webp"
              afterImage="/02DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
            />
          </div>
        </SectionImage>



        {/* SEÇÃO 03 - Provas Sociais, Perguntas ou Bônus (Preparando fotos) */}
        <SectionImage
          id="sessao-03"
          src="/sections/SESSAO03.webp"
          alt="Presets Exclusivos - Mais Detalhes"
          width={1400}
          height={5659}
          priority={false}
        >
          {/* SLIDER 03 (Esquerda) */}
          <div style={{
            position: 'absolute',
            top: '21.0108%',
            left: '12.9286%',
            width: '35.8571%',
            height: '15.6388%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/03ANTES.webp"
              afterImage="/03DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
            />
          </div>

          {/* SLIDER 04 (Direita) */}
          <div style={{
            position: 'absolute',
            top: '21.0108%',
            left: '51.3571%',
            width: '35.8571%',
            height: '15.6388%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/04ANTES.webp"
              afterImage="/04DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
            />
          </div>

          {/* SLIDER 05 (Abaixo) */}
          <div style={{
            position: 'absolute',
            top: '72.7867%',
            left: '12.9286%',
            width: '74.1429%',
            height: '22.8662%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/05ANTES.webp"
              afterImage="/05DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
            />
          </div>
        </SectionImage>
      </div>
    </main>
  );
}
