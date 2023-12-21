import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  // InstapaperShareButton,
} from 'react-share';
import cx from 'clsx';
import Image from 'next/image';
import {
  Text,
  FrameCard,
  FacebookIcon,
  TwitterIcon,
  DownloadIcon,
} from '../components';

const DownloadTemplate = () => {
  const router = useRouter();
  const { fileUrl, title } = router.query;
  const [selectedFrame, setSelectedFrame] = useState<any>('');
  const [sharUrl, setSharUrl] = useState('');
  const frameCardRef = useRef<any>(null);
  const facebookRef = useRef<any>(null);
  const twitterRef = useRef<any>(null);
  const whatsAppRef = useRef<any>(null);
  // const instaRef = useRef<any>(null);

  useEffect(() => {
    const selectedFrameTemp =
      localStorage.getItem('temp') &&
      JSON.parse(localStorage.getItem('temp') || '');
    if (selectedFrameTemp?.name) {
      setSelectedFrame(selectedFrameTemp);
    }
    return () => {
      localStorage.clear();
    };
  }, []);

  const ShareView = () => {
    return (
      <>
        <p className="uppercase text-center md:text-start mt-12 md:mt-0 md:my-2 text-base -mx-10 md:mx-0 mb-2">
          GUARDA E PARTILHA-O COM QUEM FEZ PARTE DESTE POSTER!
        </p>
        <div className="flex justify-center md:justify-normal items-center gap-[10px] mb-4 md:mb-0 md:my-4 md:mx-0 -mx-5">
          {sharUrl && (
            <FacebookShareButton
              ref={facebookRef}
              style={{ display: 'none' }}
              url={sharUrl}
            >
              facebook
            </FacebookShareButton>
          )}
          {sharUrl && (
            <TwitterShareButton
              ref={twitterRef}
              style={{ display: 'none' }}
              url={sharUrl}
            >
              Twitter
            </TwitterShareButton>
          )}
          {sharUrl && (
            <WhatsappShareButton
              ref={whatsAppRef}
              style={{ display: 'none' }}
              url={sharUrl}
            >
              WhatsApp
            </WhatsappShareButton>
          )}
          {/* {sharUrl && (
            <InstapaperShareButton
              ref={instaRef}
              style={{ display: 'none' }}
              url={sharUrl}
            >
              Instagream
            </InstapaperShareButton>
          )} */}
          <FacebookIcon
            className="cursor-pointer -rotate-[1deg]"
            width={49}
            height={49}
            onClick={() => sharUrl && facebookRef?.current?.click()}
          />
          {/* <Image
            className="cursor-pointer -rotate-[1deg]"
            src="/svg/insta.svg"
            alt="instagram"
            width={49}
            height={49}
            // onClick={() => sharUrl && instaRef?.current?.click()}
          /> */}
          <TwitterIcon
            className="cursor-pointer -rotate-[1deg]"
            width={49}
            height={49}
            onClick={() => sharUrl && twitterRef?.current?.click()}
          />
          <Image
            className="cursor-pointer -rotate-[1deg]"
            src="/svg/whatsapp.svg"
            alt="whats-app"
            width={49}
            height={49}
            onClick={() => sharUrl && whatsAppRef?.current?.click()}
          />
          <DownloadIcon
            className="cursor-pointer -rotate-[1deg]"
            onClick={() => frameCardRef?.current?.downloadAsImage()}
            width={49}
            height={49}
          />
        </div>
      </>
    );
  };

  return (
    <div
      className={cx(
        'bg-cover bg-top py-8 md:bg-top bg-no-repeat bg-secondary-50 bg-share-poster-mob-bg md:bg-create-poster-bg',
        'flex flex-col justify-center items-center min-h-screen'
      )}
    >
      <div
        className={cx(
          'w-[83%] md:w-[80%] text-chalk-50',
          'flex-col lg:flex-row',
          'flex justify-center items-center lg:space-x-32'
        )}
      >
        <div className="w-[100%] xl:w-[29rem] lg:w-[24rem] md:w-[38rem] mt-12 md:mt-0">
          <Image
            className="block md:hidden relative left-[-25px]"
            src="/logoHWD.svg"
            alt="logo"
            width={113}
            height={56}
          />
          <Image
            className="hidden md:block relative left-[-52px]"
            src="/logoHWD.svg"
            alt="logo"
            width={200}
            height={99}
          />
          <div className="pt-4">
            <Text
              font="druk"
              className="tracking-[0px] text-[2.8rem] leading-none xl:text-[5.5rem] md:text-[4.5rem] uppercase"
            >
              O TEU POSTER DE NATAL À HOLLYWOOD ESTÁ PRONTO.
            </Text>

            <div className="md:py-4">
              <p className="md:text-[24px] text-base w-[100%] my-4">
                Pode não ser a estreia mais aguardada do ano, mas o que conta é
                a intenção.
              </p>
            </div>
            <div className="hidden md:block">
              <ShareView />
            </div>
          </div>
        </div>
        {selectedFrame && selectedFrame.template && (
          <div className="md:w-[38%] w-[80%] lg:w-[28%] xl:w-[30%]">
            <FrameCard
              jsonObjects={selectedFrame?.template}
              name={selectedFrame?.name}
              forwardedRef={frameCardRef}
              fabricBackgroundImageUrl={`${fileUrl}`}
              selectedFrameName={selectedFrame?.name}
              title={`${title}`}
              setSharUrl={setSharUrl}
            />
            <div className="block md:hidden">
              <ShareView />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadTemplate;
