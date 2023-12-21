import { useEffect, useState, useRef } from 'react';
import cx from 'clsx';
import Image from 'next/image';
import { useQuery } from 'urql';
import { useRouter } from 'next/router';
import { ArrowIcon, BackIcon, Button, Text } from '../components';
import { getPublishedRandomTemplate } from '../graphql/query';
import { FrameCard } from '../components';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Templates = () => {
  const [templateResult] = useQuery({
    query: getPublishedRandomTemplate,
    requestPolicy: 'network-only',
  });
  const router = useRouter();
  const { title, subtitle, characters, fileUrl } = router.query;
  const [updatedData, setUpdatedData] = useState([]);
  const [selectedFrame, setSelectedFrame] = useState('');
  const prevbtn: any = useRef();
  const nextbtn: any = useRef();
  const { data, fetching, error } = templateResult;

  useEffect(() => {
    if (
      data?.getPublishedRandomTemplate?.length &&
      title &&
      subtitle &&
      fileUrl
    ) {
      const updatedDataTemp = data?.getPublishedRandomTemplate?.map(
        (item: any) => {
          const templateBbj = JSON.parse(item?.template);
          templateBbj.objects = templateBbj?.objects?.map((element: any) => {
            if (element.name === 'TÍTULO') {
              return { ...element, text: title };
            }
            if (element.name === 'SUBTÍTULO') {
              return { ...element, text: subtitle };
            }
            if (element.name === 'ATORES') {
              return { ...element, text: characters };
            }
            return element;
          });
          // if (templateBbj?.backgroundImage?.name === 'frame') {
          //   templateBbj.backgroundImage.src = `${process.env.NEXT_PUBLIC_APP_API_URL}${fileUrl}`
          // }
          item.template = JSON.stringify(templateBbj);
          return item;
        }
      );
      setUpdatedData(updatedDataTemp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, fetching]);

  const onBack = () => {
    router.push({
      pathname: '/create-poster',
    });
  };

  const onContinue = () => {
    const seletedTemp: any = updatedData?.find((item: any) => {
      if (item?.name === selectedFrame) {
        return item;
      }
    });
    if (seletedTemp?.name) {
      localStorage.setItem('temp', JSON.stringify(seletedTemp));
      router.push({
        pathname: '/share-template',
        query: {
          fileUrl: fileUrl,
          title: title,
        },
      });
    }
  };

  return (
    <div
      className={cx(
        'bg-cover bg-center py-8 bg-no-repeat bg-select-poster-mob md:bg-landing-page-bg-new',
        'flex flex-col justify-center items-center min-h-screen text-chalk-50'
      )}
    >
      <div className="md:bg-secondary-50 text-chalk-50 md:ml-0">
        <Image
          className="block md:hidden relative left-[-30px]"
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
        <div className="lg:w-[100%]">
          <Text className="tracking-[0px] uppercase font-bold ">&nbsp;</Text>
        </div>
        <div className="lg:w-[100%]">
          <Text className="tracking-[0px] text-xl font-bold">
            3. Escolhe o poster mais natalício.
          </Text>
        </div>
      </div>

      {((fetching && !data && !error) || updatedData?.length === 0) && (
        <div className="grid grid-cols-4 gap-4 animate-pulse">
          <div className="w-full h-96 bg-primary-200" />
          <div className="w-full h-96 bg-primary-200" />
          <div className="w-full h-96 bg-primary-200" />
          <div className="w-full h-96 bg-primary-200" />
        </div>
      )}
      {!fetching && data && !error && updatedData?.length > 0 && (
        <div className="hidden md:grid grid-cols-4 gap-9 my-[25px] justify-items-center w-[80%]">
          {updatedData?.map((item: any) => {
            return (
              <FrameCard
                title={title as string}
                jsonObjects={item?.template}
                name={item?.name}
                key={item?._id}
                onSelectFrame={(name: string) => setSelectedFrame(name)}
                selectedFrameName={selectedFrame}
                fabricBackgroundImageUrl={`${fileUrl}`}
              />
            );
          })}
        </div>
      )}
      {!fetching && data && !error && updatedData?.length > 0 && (
        <div className="flex justify-between items-center md:hidden mt-2">
          <ArrowIcon
            onClick={() => prevbtn?.current?.click()}
            className="rotate-90 w-full h-full cursor-pointer"
          />
          <Carousel
            showIndicators={false}
            showArrows={true}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  ref={prevbtn}
                  className="hidden"
                  onClick={onClickHandler}
                  title={label}
                >
                  prev
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  ref={nextbtn}
                  className="hidden"
                  onClick={onClickHandler}
                  title={label}
                >
                  Next
                </button>
              )
            }
          >
            {updatedData.map((item: any) => (
              <FrameCard
                title={title as string}
                jsonObjects={item?.template}
                name={item?.name}
                key={item?._id}
                onSelectFrame={(name: string) => setSelectedFrame(name)}
                selectedFrameName={selectedFrame}
                fabricBackgroundImageUrl={`${fileUrl}`}
              />
            ))}
          </Carousel>
          <ArrowIcon
            onClick={() => nextbtn?.current?.click()}
            className="rotate-[-90deg] w-full h-full cursor-pointer"
          />
        </div>
      )}

      <div className="flex gap-x-2 md:gap-x-4 justify-center items-center my-5">
        <Button onClick={onBack} className="hidden h-10 md:flex">
          VOLTAR
        </Button>
        <BackIcon
          onClick={onBack}
          className="block h-10 md:hidden cursor-pointer"
          width={65}
          height={64}
        />
        <Button className="h-10" disabled={!selectedFrame} onClick={onContinue}>
          CONTINUAR
        </Button>
      </div>
    </div>
  );
};

export default Templates;
