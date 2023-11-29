import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="px-4">
      <div className="max-w-8pt mx-auto w-full">
        <div className="h-20 flex items-center justify-between">
          <Image
            src={'/branco.png'}
            width={219}
            height={50}
            alt="Pacheco e Lacerda escritório de arquitetura"
          ></Image>

          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link className="text-white text-sm" href={'#'}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" href={'#'}>
                  Soluçoes
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" href={'#'}>
                  Passo a passo
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" href={'#'}>
                  Portfólio
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" href={'#'}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm" href={'#'}>
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-sm flex justify-center px-6 py-3 bg-primary-default"
                  href={'#'}
                >
                  Solicitar orçamento
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
