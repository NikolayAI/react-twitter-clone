import React from 'react'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton/IconButton'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined'
import Paper from '@material-ui/core/Paper'
import {useHomeStyles} from '../../pages/Home/homeTheme'


// interface ITweetProps {
//     text: string
//     classes: ReturnType<typeof useHomeStyles>
//     user: {
//         fullName: string,
//         userName: string,
//         avatarUrl: string,
//     }
// }


type TweetPropsType = {
    text: string
    classes: ReturnType<typeof useHomeStyles>
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string,
    }
}


export const Tweet: React.FC<TweetPropsType> = ({text, classes, user}) => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={'outlined'}>
            <Avatar className={classes.tweetAvatar}
                    alt={`Аватарка пользователя ${user.fullName}`}
                    src={user.avatarUrl}
            />
            <div>
                <Typography>
                    <b>{user.fullName}</b>&nbsp;
                    <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                    <span className={classes.tweetUserName}>&middot;</span>&nbsp;
                    <span className={classes.tweetUserName}>1 ч</span>
                </Typography>
                <Typography variant={'body1'} gutterBottom>
                    {text}
                </Typography>
                <div className={classes.tweetFooter}>
                    <div>
                        <IconButton>
                            <ChatBubbleOutlineIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <RepeatIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <FavoriteBorderIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <ReplyOutlinedIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </Paper>
    )
}