import { useRef, useState } from 'react';
import { cx } from '../../clsx';
import Image from 'next/image';
import { Text } from '../Text/Text';
import { CloudIcon } from '../Icons';

interface FileUploadProps {
  onFileSelect: Function;
  title: string;
  subTitle: string;
  acceptType: string;
  maxWidth?: number;
  maxHeight?: number;
}
export const FileUpload = (props: FileUploadProps) => {
  const { onFileSelect, title, subTitle, acceptType, maxWidth, maxHeight } =
    props;
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const fileInputRef: any = useRef(null);

  const handleOnClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = async (e: any) => {
    if (
      e?.target?.files &&
      e?.target?.files[0] &&
      onFileSelect &&
      typeof onFileSelect === 'function'
    ) {
      if (maxHeight && maxWidth) {
        checkFileSizeAndAddFile(e.target.files[0]);
      } else {
        setSelectedFileName(e.target.files[0]?.name);
        onFileSelect(e.target.files[0]);
      }
    }
  };
  const handleDragOver = (event: any) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: any) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (event: any) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event?.dataTransfer?.files[0] || '';
    if (file && onFileSelect && typeof onFileSelect === 'function') {
      if (maxHeight && maxWidth) {
        checkFileSizeAndAddFile(file);
      }
    } else {
      setSelectedFileName(event?.dataTransfer?.files[0]?.name);
      onFileSelect(file);
    }
  };

  const checkFileSize = (file: any, maxWidth: any, maxHeight: any) => {
    const _URL = window.URL || window.webkitURL;
    // @ts-ignore
    const img = new Image();
    const objectUrl = _URL.createObjectURL(file);
    const promise = new Promise((resolve, reject) => {
      img.onload = function () {
        // @ts-ignore
        if (this.width <= maxWidth && this.height <= maxHeight) {
          resolve(true);
        } else {
          reject(false);
        }
        _URL.revokeObjectURL(objectUrl);
      };
      img.onerror = reject;
    });
    img.src = objectUrl;
    return promise;
  };

  const checkFileSizeAndAddFile = async (file: any) => {
    try {
      const checkFileRes = await checkFileSize(file, maxWidth, maxHeight);
      if (checkFileRes) {
        setSelectedFileName(file?.name);
        onFileSelect(file);
      } else {
        setSelectedFileName('');
        onFileSelect('');
        // toast.error(`File dimensions exceed limits (${maxWidth}x${maxHeight})`);
      }
    } catch (error) {
      setSelectedFileName('');
      onFileSelect('');
      // toast.error(`File dimensions exceed limits (${maxWidth}x${maxHeight})`);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div
        className={cx(
          'flex items-center justify-between',
          'cursor-pointer px-[7px] md:px-[15px] py-[10px]',
          {
            'bg-primary-300': isDragging,
            'border border-tomato-50 bg-secondary-50': !isDragging,
          }
        )}
        onClick={handleOnClick}
      >
        <div className="">
          <p className="font-bold tracking-[0.18px] text-[18px]">
            {selectedFileName || title}
            <Text className="tracking-[0.16px] block text-graphite-100">
              {subTitle}
            </Text>
          </p>
        </div>
        <CloudIcon width={34} height={34} />
        <input
          ref={fileInputRef}
          className="hidden"
          accept={acceptType}
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileUpload;
