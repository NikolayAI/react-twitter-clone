import React from 'react'
import {Grid} from '@material-ui/core'
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
                            <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Уведомления</Typography>
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
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>3</Paper>
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
}))