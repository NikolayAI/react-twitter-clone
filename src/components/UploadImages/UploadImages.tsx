import React, { useCallback, useEffect, useRef } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';
import { useHomeStyles } from '../../pages/Home/homeTheme';
import { IImageObj } from '../AddTweetForm/AddTweetForm';
import { ImageList } from '../ImageList/ImageList';

interface IUploadImages {
  images: IImageObj[];
  onChangeImages: (callback: (images: IImageObj[]) => IImageObj[]) => void;
}

export const UploadImages: React.FC<IUploadImages> = ({
    images,
    onChangeImages
  }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickImage = () => {
      if (inputRef.current) inputRef.current.click();
    };

    const removeImage = (url: string) => {
      onChangeImages((images) => images.filter((obj) => obj.blobUrl !== url));
    };

    const handleChangeFileInput = useCallback((event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const fileObj = new Blob([file]);
        onChangeImages((images) => [...images, {
          blobUrl: URL.createObjectURL(fileObj),
          file,
        }]);
        target.value = '';
      }
      target.value = '';
    }, []);

    useEffect(() => {
      const ref = inputRef.current;
      if (ref) {
        ref.addEventListener('change', handleChangeFileInput);
      }
      return () => {
        if (ref) {
          ref.removeEventListener('change', handleChangeFileInput);
        }
      };
    }, []);

    return (
      <>
        <IconButton color="primary" onClick={handleClickImage}>
          <ImageOutlinedIcon style={{ fontSize: 26 }}/>
        </IconButton>
        <input ref={inputRef} type="file" id="upload-input" hidden/>
        <ImageList images={images} removeImage={removeImage}/>
      </>
    );
  }
;