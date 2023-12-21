/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Text, Button } from '../components';
import cx from 'clsx';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div
      className={cx(
        'bg-cover bg-center bg-landing-page-mob md:bg-landing-page-bg-new',
        'flex flex-col justify-center items-center min-h-screen'
      )}
    >
      <div className="text-chalk-50 text-center md:mt-0">
        <Image
          className="relative h-24 w-44 md:w-64 md:h-32 left-[3rem] md:mb-6 md:left-[13.5rem]"
          src="/logoHWD.svg"
          alt="logo"
          width={240}
          height={170}
        />
        <div className="md:w-full lg:max-w-5xl text-center md:mt-0">
          <Text
            // font="druk"
            className={cx(
              'font-[Druk-medium] block whitespace-pre md:whitespace-normal',
              'md:tracking-[2.51px] text-6xl md:text-[5rem]',
              'uppercase tracking-wide text-chalk-50'
            )}
          >
            {`O TEU NATAL\nÀ HOLLYWOOD`}
          </Text>

          <div className="mt-4 flex flex-col items-center space-y-3 text-center">
            <Text className="w-[21rem] md:w-full font-[TradeGothicLight] text-lg text-chalk-50 tracking-[0px]">
              Podes não ter o melhor presente, mas tens as melhores histórias
              para oferecer.
              <Text className="font-[TradeGothicLight] font-semibold whitespace-pre md:whitespace-normal text-base md:text-lg text-chalk-50 tracking-[0px]">
                {`\nO que conta é a intenção.`}
              </Text>
            </Text>
            <Text className="block whitespace-pre md:whitespace-normal md:px-20 font-[TradeGothicLight] text-sm md:text-base text-chalk-50 tracking-[0px]">
              {`Conta-nos a tua melhor história de Natal e nós devolvemos-te\num poster personalizado, gerado por inteligência artificial,\ncom o teu filme de Natal à Hollywood para enviares\naos mil grupos de WhatsApp em que estás.`}
            </Text>
          </div>

          <div className="mt-12">
            <Link href="/create-poster">
              <Button
                className="md:my-0 py-2 md:mx-auto mx-auto max-w-[18rem] md:max-w-[15rem] md:w-full"
                textClass="text-lg md:text-xl md:font-bold font-[TradeGothicLTStd] md:font-[Druk-medium] tracking-wider"
              >
                CRIAR POSTER
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
