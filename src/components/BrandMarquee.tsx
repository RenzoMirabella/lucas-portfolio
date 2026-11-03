import { Brand } from "@/data/brands";

interface BrandMarqueeProps {
  brands: Brand[];
}

// Cinta de marcas en movimiento continuo. Se pausa al pasar el mouse y,
// si el sistema pide menos movimiento, queda como una lista fija.
const BrandMarquee = ({ brands }: BrandMarqueeProps) => {
  const renderList = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center ${hidden ? "motion-reduce:hidden" : "motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6"}`}
    >
      {brands.map(({ name, logo }) => (
        <li key={name} className="shrink-0 px-8 md:px-12">
          {logo ? (
            <img
              src={logo}
              alt={hidden ? "" : name}
              loading="lazy"
              className="h-8 md:h-10 w-auto opacity-70"
            />
          ) : (
            <span className="font-display text-lg md:text-2xl whitespace-nowrap text-portfolio-text-muted">
              {name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:[mask-image:none]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
        {renderList(false)}
        {renderList(true)}
      </div>
    </div>
  );
};

export default BrandMarquee;
