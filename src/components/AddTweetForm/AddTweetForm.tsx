import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import ImageOutlinedIcon from '@material-ui/icons/CropOriginalOutlined'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import {useHomeStyles} from '../../pages/Home/homeTheme'


// interface IAddTweetFormProps {
//     classes: ReturnType<typeof useHomeStyles>
//     maxRows: number
// }


type AddTweetFormPropsType = {
    classes: ReturnType<typeof useHomeStyles>
    maxRows?: number
}


const MAX_LENGTH = 280


export const AddTweetForm: React.FC<AddTweetFormPropsType> = ({classes, maxRows}) => {

    const [text, setText] = React.useState('')


    const textLimitPercent = Math.round(text.length / 280 * 100)
    const textCount = MAX_LENGTH - text.length
    const circularProgressStyle = textLimitPercent > 80 && text.length < MAX_LENGTH
        ? {color: 'orange'} : text.length >= MAX_LENGTH ? {color: 'red'} : undefined


    const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) setText(e.currentTarget.value)
    }
    const handleClickAddTweet = (): void => setText('')

    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar className={classes.tweetAvatar}
                        alt={`Аватарка пользователя UserAvatar`}
                        src={`https://images.unsplash.com/photo-1605096486908-381fac7ce76e?ixlib=
                              rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`}
                />
                <TextareaAutosize onChange={handleChangeTextarea}
                                  value={text}
                                  className={classes.addFormTextarea}
                                  placeholder={'Что происходит?'}
                                  rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color={'primary'}>
                        <ImageOutlinedIcon style={{fontSize: 26}}/>
                    </IconButton>
                    <IconButton color={'primary'}>
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && <>
                        <span>{textCount}</span>
                        <div className={classes.addFormCircleProgress}>
                            <CircularProgress variant={'static'}
                                              size={20}
                                              thickness={5}
                                              value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                              style={circularProgressStyle}
                            />
                            <CircularProgress style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                              variant={'static'}
                                              size={20}
                                              thickness={5}
                                              value={100}
                            />
                        </div>
                    </>}
                    <Button onClick={handleClickAddTweet}
                            disabled={text.length >= MAX_LENGTH}
                            color={'primary'}
                            variant={'contained'}
                    >
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    )
}