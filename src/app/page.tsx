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
          height={6579}
          priority={false}
        >
          {/* SLIDER 01 */}
          <div style={{
            position: 'absolute',
            top: '19.3950%',
            left: '12.9286%',
            width: '74.2143%',
            height: '19.6838%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/01ANTES.webp"
              afterImage="/01DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
              presetName="Essentials 01"
            />
          </div>

          {/* SLIDER 02 */}
          <div style={{
            position: 'absolute',
            top: '55.5404%',
            left: '12.9286%',
            width: '74.1429%',
            height: '19.6838%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/02ANTES.webp"
              afterImage="/02DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
              presetName="Essentials 07"
            />
          </div>

          {/* SLIDER 03 */}
          <div style={{
            position: 'absolute',
            top: '76.5922%',
            left: '12.9286%',
            width: '74.1429%',
            height: '19.6838%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/03ANTES.webp"
              afterImage="/03DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
              presetName="Essentials 04"
            />
          </div>
        </SectionImage>



        {/* SEÇÃO 03 - Provas Sociais, Perguntas ou Bônus (Preparando fotos) */}
        <SectionImage
          id="sessao-03"
          src="/sections/SESSAO03.webp"
          alt="Presets Exclusivos - Mais Detalhes"
          width={1400}
          height={7453}
          priority={false}
        >
          {/* SLIDER 04 */}
          <div style={{
            position: 'absolute',
            top: '15.9533%',
            left: '12.9286%',
            width: '74.1429%',
            height: '17.3756%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/04ANTES.webp"
              afterImage="/04DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
              presetName="Essentials 05"
            />
          </div>

          {/* SLIDER 05 */}
          <div style={{
            position: 'absolute',
            top: '60.7541%',
            left: '12.9286%',
            width: '74.1429%',
            height: '17.3756%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/05ANTES.webp"
              afterImage="/05DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
              presetName="Essentials 14"
            />
          </div>

          {/* SLIDER 06 */}
          <div style={{
            position: 'absolute',
            top: '79.3372%',
            left: '12.9286%',
            width: '74.1429%',
            height: '17.3756%',
            zIndex: 10
          }}>
            <BeforeAfterSlider
              beforeImage="/06ANTES.webp"
              afterImage="/06DEPOIS.webp"
              beforeLabel="Antes"
              afterLabel="Depois"
              presetName="Essentials 02"
            />
          </div>
        </SectionImage>

        {/* SEÇÃO 04 */}
        <SectionImage
          id="sessao-04"
          src="/sections/SESSAO04.webp"
          alt="Presets Exclusivos - Seção 04"
          width={1400}
          height={5504}
          priority={false}
          hotspots={[
            {
              id: "cta-sessao-04",
              top: "90.1526%",
              left: "20.6429%",
              width: "58.7143%",
              height: "2.8161%",
              href: "https://pay.hotmart.com/I107651584Q?checkoutMode=10&offDiscount=ESSENTIALS50",
              ariaLabel: "Garantir Meus Presets Agora",
            }
          ]}
        />

        {/* SEÇÃO 05 */}
        <SectionImage
          id="sessao-05"
          src="/sections/SESSAO05.webp"
          alt="Presets Exclusivos - Seção 05"
          width={1400}
          height={5974}
          priority={false}
          hotspots={[
            {
              id: "cta-sessao-05",
              top: "74.3723%",
              left: "13.5000%",
              width: "58.7857%",
              height: "2.5946%",
              href: "https://pay.hotmart.com/I107651584Q?checkoutMode=10&offDiscount=ESSENTIALS50",
              ariaLabel: "Garantir Meus Presets Agora",
            }
          ]}
        />
      </div>
    </main>
  );
}
