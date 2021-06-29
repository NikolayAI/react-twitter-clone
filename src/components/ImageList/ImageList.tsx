import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useHomeStyles } from '../../pages/Home/homeTheme';

interface IImageList {
  images: string[];
  removeImage?: (url: string) => void;
}

export const ImageList: React.FC<IImageList> = ({ images, removeImage }) => {
  const classes = useHomeStyles();
  return (
    <div className={classes.imagesList}>
      {images.map((url) => (
        <div
          key={url}
          className={classes.imagesListItem}
          style={{ backgroundImage: `url(${url})` }}
        >
          {removeImage && (
            <IconButton
              className={classes.imagesListItemRemove}
              onClick={() => removeImage(url)}
            >
              <HighlightOffIcon style={{ fontSize: 18 }}/>
            </IconButton>
          )}
        </div>
      ))}
    </div>
  );
};