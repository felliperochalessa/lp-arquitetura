import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  return (
    <section className="w-full h-[768px] relative px-4">
      <Image
        src={'/hero.png'}
        fill
        alt="hero"
        className="w-full h-full absolute inset-0 -z-40 object-cover"
      ></Image>
      <div className="absolute bg-neutral-900/75 w-full h-full inset-0 -z-10"></div>
      <Header></Header>

      <div className="py-32 max-w-8pt mx-auto">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-6xl font-bold  text-white leading-tight">
            <span className="text-primary-default">Realize seu sonho</span> com
            tranquilidade e planejamento
          </h1>
          <p className="text-white text-lg leading-normal">
            Viva uma experiência única no seu lar, do projeto arquitetônico ao
            design de interiores, nós cuidamos de absolutamente tudo para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
