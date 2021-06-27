import React from 'react';
import { IImageObj } from '../AddTweetForm/AddTweetForm';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useHomeStyles } from '../../pages/Home/homeTheme';

interface IImageList {
  images: IImageObj[];
  removeImage: (url: string) => void;
}

export const ImageList: React.FC<IImageList> = ({ images, removeImage }) => {
  const classes = useHomeStyles();
  return (
    <div className={classes.imagesList}>
      {images.map(({blobUrl}) => (
        <div
          key={blobUrl}
          className={classes.imagesListItem}
          style={{ backgroundImage: `url(${blobUrl})` }}
        >
          <IconButton
            className={classes.imagesListItemRemove}
            onClick={() => removeImage(blobUrl)}
          >
            <HighlightOffIcon style={{ fontSize: 18 }}/>
          </IconButton>
        </div>
      ))}
    </div>
  );
};