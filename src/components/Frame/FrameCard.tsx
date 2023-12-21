import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { cx } from '../clsx';
import { upLoadFile } from '../../graphql/client';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../config/constant';
import {
  calculatePositionForTile,
  calculateTotalLines,
} from '@/utils/titleLine';

interface FrameCardProps {
  jsonObjects: any;
  name: string;
  onSelectFrame?: Function;
  selectedFrameName?: string;
  forwardedRef?: any;
  fabricBackgroundImageUrl: string;
  title?: string;
  setSharUrl?: Function;
}
export const FrameCard = ({
  jsonObjects,
  name,
  onSelectFrame,
  selectedFrameName = '',
  forwardedRef,
  fabricBackgroundImageUrl,
  title,
  setSharUrl,
}: FrameCardProps) => {
  const [imageSrc, setImageScr] = useState('');
  const [isLoading, setLoading] = useState(true);
  React.useImperativeHandle(forwardedRef, () => ({
    downloadAsImage,
  }));

  useEffect(() => {
    if (!title) {
      return;
    }
    const canvas = new fabric.StaticCanvas(name);
    const parsedData = JSON.parse(jsonObjects);
    console.warn('parsedData', parsedData);
    const totalLines = calculateTotalLines(title ?? '');
    const topPosition = calculatePositionForTile(totalLines);
    parsedData.objects[1].fontFamily = 'Trade Gothic LT Bold Condensed';
    parsedData.objects[1].top = topPosition;
    parsedData.objects[1].width = 300;
    // parsedData.objects[2].width = 350;
    // parsedData.objects[1].left = 13;
    canvas.loadFromJSON(JSON.stringify(parsedData), () => {
      const existingBackgroundImage = canvas.backgroundImage;

      if (
        existingBackgroundImage &&
        typeof existingBackgroundImage !== 'string'
      ) {
        // Remove the existing background image
        canvas.remove(existingBackgroundImage);
      }
      if (typeof fabricBackgroundImageUrl === 'string') {
        fabric.Image.fromURL(
          fabricBackgroundImageUrl,
          (imgItem: any) => {
            imgItem.set({
              left: 0,
              top: 0,
              scaleX: CANVAS_WIDTH / imgItem.width,
              scaleY: CANVAS_HEIGHT / imgItem.height,
            });
            canvas.setBackgroundImage(imgItem, () => {
              canvas?.renderAll.bind(canvas);
              const dataUrl = canvas.toDataURL({
                format: 'jpeg',
                left: 0,
                top: 0,
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                multiplier: 3.33,
                quality: 1,
              });
              setImageScr(dataUrl);
              if (setSharUrl && typeof setSharUrl === 'function') {
                getPosterImageUrl(dataUrl);
              }
              setLoading(false);
            });
          },
          { crossOrigin: 'anonymous' }
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadAsImage = () => {
    if (imageSrc) {
      const link = document.createElement('a');
      link.href = imageSrc;
      link.download = 'poster.png';
      link.click();
    }
  };

  const getPosterImageUrl = async (dataUrl: any) => {
    try {
      if (dataUrl && title) {
        const blobImage = dataURLtoBlob(dataUrl);
        const uploadedPosterRes = await upLoadFile(blobImage, `${title}.jpeg`);
        if (uploadedPosterRes?.url && typeof setSharUrl === 'function') {
          setSharUrl(uploadedPosterRes?.url);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dataURLtoBlob = (dataURL: any) => {
    const parts = dataURL.split(',');
    const mime = parts[0].match(/:(.*?);/)[1];
    const byteString = atob(parts[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mime });
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="w-full animate-pulse h-96 bg-primary-200" />
      ) : (
        <div
          className={cx(
            'w-fit p-[15px]',
            selectedFrameName === name && 'selectedFrame'
          )}
          onClick={() => onSelectFrame && onSelectFrame(name)}
        >
          <img src={imageSrc} alt={name} />
        </div>
      )}
    </div>
  );
};
