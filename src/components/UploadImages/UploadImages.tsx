import React, { useEffect, useRef, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';

export const UploadImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickImage = () => {
    if (inputRef.current) inputRef.current.click();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
          const fileObj = new Blob([file]);
          setImages(prev => [...prev, URL.createObjectURL(fileObj)]);
        }
      });
    }
  }, []);

  return (
    <>
      <IconButton color="primary" onClick={handleClickImage}>
        <ImageOutlinedIcon style={{ fontSize: 26 }}/>
      </IconButton>
      <input ref={inputRef} type="file" id="upload-input" hidden/>
      <div>
        {images.map((url) => <img src={url} alt="photo"/>)}
      </div>
    </>
  );
};