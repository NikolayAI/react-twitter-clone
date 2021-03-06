import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import classNames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { useHomeStyles } from '../../pages/Home/homeTheme';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAddTweet,
  setAddFormState
} from '../../store/ducks/tweets/actionCreators';
import { selectAddFormState } from '../../store/ducks/tweets/selectors';
import { AddFormState } from '../../store/ducks/tweets/contracts/state';
import Alert from '@material-ui/lab/Alert';
import { UploadImages } from '../UploadImages/UploadImages';
import { uploadImage } from '../../utils/uploadImage';

type AddTweetFormPropsType = {
  classes: ReturnType<typeof useHomeStyles>
  maxRows?: number
}

const MAX_LENGTH = 280;

export interface IImageObj {
  blobUrl: string;
  file: File;
}

export const AddTweetForm: React.FC<AddTweetFormPropsType> = ({
  classes,
  maxRows
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [images, setImages] = useState<IImageObj[]>([]);
  const addFormState = useSelector(selectAddFormState);

  const textLimitPercent = Math.round(text.length / 280 * 100);
  const textCount = MAX_LENGTH - text.length;
  const circularProgressStyle = (
    textLimitPercent > 80 && text.length < MAX_LENGTH
      ? { color: 'orange' } : text.length >= MAX_LENGTH
      ? { color: 'red' } : undefined
  );

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) setText(e.currentTarget.value);
  };
  const handleClickAddTweet = async (): Promise<void> => {
    let result = [];
    dispatch(setAddFormState(AddFormState.LOADING));
    for (let i = 0; i < images.length; i++) {
      const file = images[i].file;
      try {
        const { url } = await uploadImage(file);
        result.push(url);
      } catch (e) {
        dispatch(setAddFormState(AddFormState.NEVER));
      }
    }
    dispatch(fetchAddTweet({ text, images: result }));
    setText('');
    setImages([]);
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src={`https://images.unsplash.com/photo-1605096486908-381fac7ce76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`}
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          value={text}
          className={classes.addFormTextarea}
          placeholder={'Что происходит?'}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <UploadImages
            images={images}
            onChangeImages={setImages}
          />
        </div>
        <div className={classes.addFormBottomRight}>
          {text && <>
            <span>{textCount}</span>
            <div className={classes.addFormCircleProgress}>
              <CircularProgress
                variant={'static'}
                size={20}
                thickness={5}
                value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                style={circularProgressStyle}
              />
              <CircularProgress
                style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                variant={'static'}
                size={20}
                thickness={5}
                value={100}
              />
            </div>
          </>}
          <Button
            onClick={handleClickAddTweet}
            disabled={!text || text.length >= MAX_LENGTH || addFormState === AddFormState.LOADING}
            color={'primary'}
            variant={'contained'}
          >
            {addFormState === AddFormState.LOADING
              ? <CircularProgress color={'inherit'} size={16}/>
              : 'Твитнуть'
            }
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR &&
      <Alert severity="error">Ошибка при добавлении твита</Alert>}
    </div>
  );
};