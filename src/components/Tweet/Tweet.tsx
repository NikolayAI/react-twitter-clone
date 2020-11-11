import React from 'react'
import classNames from 'classnames'
import {Grid} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton/IconButton'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined'
import Paper from '@material-ui/core/Paper'
import {useHomeStyles} from '../../pages/Home'


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
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar className={classes.tweetAvatar}
                            alt={`Аватарка пользователя ${user.fullName}`}
                            src={user.avatarUrl}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullName}</b>
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
                </Grid>
            </Grid>
        </Paper>
    )
}