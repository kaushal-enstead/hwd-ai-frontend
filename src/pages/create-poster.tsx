import { useState, useCallback } from 'react';
import Image from 'next/image';
import cx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Cropper from 'react-easy-crop';
import { useRouter } from 'next/router';
import { Text, Button, FileUpload, Modal, BackIcon } from '../components';
import { getDetailsFromStory, upLoadFile } from '../graphql/client';
import { getCroppedImg } from '../utils/index';
import { Checkbox } from '@/components/Core/Checkbox/Checkbox';

const schema = yup
  .object({
    content: yup.string().required('Content is required field'),
    file: yup.mixed().required('File is required field'),
    termCondition: yup.boolean().required('').oneOf([true]),
  })
  .required();

const CreatePoster = () => {
  const router = useRouter();
  const { register, setValue, watch, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setIsModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState<any>('');
  const [selectedFileName, setSelectedFileName] = useState('');

  const onSubmit = async (data: any) => {
    console.log('data==>', data);
    setIsLoading(true);
    try {
      const uniqueSuffix = Date.now() + '-';
      const [response, uploadFileRes] = await Promise.all([
        getDetailsFromStory({ story: data?.content }),
        upLoadFile(data?.file, uniqueSuffix + selectedFileName),
      ]);
      setIsLoading(false);
      if (response?.data?.title && uploadFileRes?.url) {
        setErrorMsg('');
        router.push({
          pathname: '/templates',
          query: {
            title: response?.data?.title?.toUpperCase(),
            subtitle: response?.data?.subtitle?.toUpperCase(),
            characters:
              (response?.data?.characters &&
                response?.data?.characters?.length > 0 &&
                response?.data?.characters
                  ?.map((obj: any) => obj.name?.toUpperCase())
                  .join(', ')) ||
              '',
            fileUrl: uploadFileRes?.url,
          },
        });
      } else {
        setErrorMsg('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        selectedFileUrl,
        croppedAreaPixels,
        rotation
      );
      if (croppedImage) {
        setValue('file', croppedImage);
        setIsModalOpen(false);
      }
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [croppedAreaPixels, rotation]);

  return (
    <div
      className={cx(
        'bg-cover bg-center bg-no-repeat py-8 bg-create-poster-mobile md:bg-create-poster-bg',
        'flex flex-col justify-center items-center min-h-screen'
      )}
    >
      <div className="lg:w-[78%]">
        <Text className="tracking-[0px] uppercase font-bold ">&nbsp;</Text>
      </div>
      <div className="w-[80%] md:w-[43%] text-chalk-50">
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
        <div className="lg:w-[78%]">
          <Text className="tracking-[0px] uppercase font-bold ">&nbsp;</Text>
        </div>
        <div className="w-full">
          <Text className="tracking-[0px] text-xl font-bold w-full">
            1. Escreve aqui a tua história de Natal &nbsp;
            <span className="font-light text-base font-[TradeGothicLight]">
              (máximo 200 caracteres)
            </span>
            , um pequeno resumo que explique o que aconteceu e quem esteve
            envolvido.
          </Text>
        </div>
        <textarea
          className={cx(
            'w-full min-h-[200px] mb-[29px] bg-secondary-50 text-chalk-50',
            'border border-tomato-50 textArea px-[10px] py-[15px]'
          )}
          id="content"
          maxLength={200}
          {...register('content')}
        />
        <Text className="tracking-[0px] text-xl font-bold">
          2. Submete uma imagem ou fotografia para o teu poster de Natal.
        </Text>
        <FileUpload
          title="FAZ UPLOAD DA TUA FOTOGRAFIA AQUI!"
          subTitle="Click to Upload or drag and drop PNG or JPG (max.1080x1920 pixels)"
          acceptType={'.png,.jpg,.jpeg'}
          onFileSelect={(selectedFile: any) => {
            // setValue('file', selectedFile);
            setSelectedFileUrl(URL.createObjectURL(selectedFile));
            setSelectedFileName(selectedFile?.name);
            setIsModalOpen(true);
          }}
        />
        {errorMsg && (
          <p className="text-tomato-50 mt-7 text-center">{errorMsg}</p>
        )}
        <div className="lg:w-[78%]">
          <Text className="tracking-[0px] uppercase font-bold ">&nbsp;</Text>
        </div>
        <div className="">
          <Checkbox
            {...register('termCondition')}
            label="Autorizo que a DREAMIA trate a informação fornecida neste formulário
            para a finalidade de gestão da minha participação nesta iniciativa,
            nos termos indicados abaixo."
            labelClass="tracking-[0px]  font-bold text-base"
          />
        </div>

        <Button
          onClick={handleSubmit(onSubmit)}
          className="mb-2 mt-[33px] mx-auto"
          disabled={
            !watch('content') ||
            !watch('termCondition') ||
            !watch('file') ||
            isLoading
          }
          loadingText="Loading..."
          loading={isLoading}
        >
          CONTINUAR
        </Button>

        <div className="lg:w-[78%]">
          <Text className="tracking-[0px] font-bold ">&nbsp;</Text>
        </div>
        <Text className="tracking-[0px] transform-none text-[0.7rem] leading-[0rem] font-sans text-graphite-100 font-normal">
          Este formulário destina-se à recolha da informação (que, caso nos
          forneça, pode incluir dados pessoais) necessária para que esta
          ferramenta gere um poster baseado nessa informação, com recurso a
          Inteligência Artificial. Caso opte por nos fornecer dados pessoais
          (e.g. informação de caráter pessoal no campo de texto ou fotografia),
          estes serão tratados pela DREAMIA de acordo com as regras definidas
          pela legislação de proteção de dados pessoais aplicável e com a
          Política de Privacidade da DREAMIA (disponível{' '}
          <a href="https://dreamia.pt/politica-de-privacidade/">
            <u>aqui</u>
          </a>
          ). A informação recolhida neste formulário será mantida pelo prazo
          máximo de 24 horas.
        </Text>
        <div className="lg:w-[78%]">
          <Text className="tracking-[0px] font-bold ">&nbsp;</Text>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full h-[70vh] md:h-[17.8rem] relative px-[5px] overflow-auto">
          {selectedFileUrl && (
            <Cropper
              image={selectedFileUrl}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={9 / 16}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              showGrid={false}
            />
          )}
        </div>
        <div className="flex gap-2 mt-8 justify-center items-center">
          <BackIcon
            onClick={() => {
              setSelectedFileUrl('');
              setSelectedFileName('');
              setIsModalOpen(false);
            }}
            className="cursor-pointer"
            width={40}
            height={40}
          />
          <Button className="h-10" onClick={getCroppedImage}>
            CROP-IMAGE
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePoster;
