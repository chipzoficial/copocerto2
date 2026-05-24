import Image from "next/image";

export function HeroBanner({
  titulo,
  texto,
  cta,
  imagem,
}: {
  titulo: string;
  texto: string;
  cta: string;
  imagem: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#511364_0%,#2b0631_100%)] px-5 py-5 text-white">
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-90">
        <Image src={imagem} alt={titulo} fill className="object-cover" />
      </div>
      <div className="relative z-10 max-w-[52%]">
        <h2 className="text-[1.95rem] font-extrabold leading-[1.02] tracking-tight">
          {titulo}
        </h2>
        <p className="mt-3 text-sm leading-5 text-white/82">{texto}</p>
        <button className="mt-5 rounded-full bg-[var(--cta)] px-5 py-3 text-sm font-extrabold text-[#2d2a12] shadow-[0_14px_30px_rgba(183,229,51,0.28)]">
          {cta}
        </button>
      </div>
      <div className="relative z-10 mt-4 flex gap-2">
        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className={`h-2 rounded-full ${
              item === 1 ? "w-8 bg-white" : "w-2 bg-white/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
