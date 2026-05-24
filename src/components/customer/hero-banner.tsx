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
    <section className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,#56146b_0%,#3e0b50_42%,#2a062f_100%)] px-5 py-5 text-white shadow-[0_22px_50px_rgba(58,12,71,0.18)]">
      <div className="absolute -right-8 bottom-0 top-0 w-[56%] opacity-95">
        <Image src={imagem} alt={titulo} fill className="object-contain object-right-bottom" />
      </div>
      <div className="absolute inset-y-0 right-0 w-28 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_70%)]" />
      <div className="relative z-10 max-w-[54%]">
        <h2 className="text-[2.15rem] font-extrabold leading-[0.95] tracking-tight">
          {titulo}
        </h2>
        <p className="mt-4 text-[0.98rem] leading-6 text-white/82">{texto}</p>
        <button className="mt-6 rounded-full bg-[var(--cta)] px-6 py-3.5 text-[0.98rem] font-extrabold text-[#2d2a12] shadow-[0_16px_34px_rgba(183,229,51,0.3)]">
          {cta}
        </button>
      </div>
      <div className="relative z-10 mt-5 flex gap-2">
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
