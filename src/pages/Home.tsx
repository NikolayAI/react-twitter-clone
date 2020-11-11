import React from 'react'
import {createStyles, Grid} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import withStyles from '@material-ui/core/styles/withStyles'
import InputBase from '@material-ui/core/InputBase'
import Avatar from '@material-ui/core/Avatar'
import grey from '@material-ui/core/colors/grey'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined'
import classNames from 'classnames'


export const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth={'lg'}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} aria-label="delete" color={'primary'}>
                                <TwitterIcon className={classes.logoIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <SearchIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}
                                        variant={'h6'}>Уведомления</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Сообщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Закладки</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <ListAltIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Список</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <PermIdentityIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Профиль</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                        <Paper className={classes.tweetsHeader} variant={'outlined'}>
                            <Typography variant={'h6'}>Главная</Typography>
                        </Paper>
                        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={'outlined'}>
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar alt='User avatar'
                                            src='https://images.unsplash.com/photo-1605026289292-78351cbc98a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'/>
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <b>thisPerson</b>
                                        <span className={classes.tweetUserName}>@SomePerson</span>
                                    </Typography>
                                    <Typography variant={'body1'} gutterBottom>
                                        orem ipsum – псевдо-латинский текст, который используется для веб дизайна,
                                        типографии, оборудования, и распечатки вместо английского текста для того, чтобы
                                        сделать ударение не на содержание, а на элементы дизайна. Такой текст также
                                        называется как заполнитель.
                                    </Typography>
                                    <div className={classes.tweetFooter}>
                                        <div>
                                            <IconButton>
                                                <ChatBubbleOutlineIcon/>
                                            </IconButton>
                                            <span>1</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <RepeatIcon/>
                                            </IconButton>
                                            <span>2</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <FavoriteBorderIcon/>
                                            </IconButton>
                                            <span>3</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <ReplyOutlinedIcon/>
                                            </IconButton>
                                            <span>4</span>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>

                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth placeholder={'Поиск по Твиттеру'}/>
                </Grid>
            </Grid>
        </Container>
    )
}


const useHomeStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
    },
    tweetFooterIcon: {
        fontSize: 20,
    },
    tweetUserName: {
        color: grey[500],
    },
}))


const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,
        },
    }),
)(InputBase)