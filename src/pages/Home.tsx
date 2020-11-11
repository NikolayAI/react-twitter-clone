import React from 'react'
import {createStyles, Grid, Theme} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import withStyles from '@material-ui/core/styles/withStyles'
import InputBase from '@material-ui/core/InputBase'
import grey from '@material-ui/core/colors/grey'
import {Tweet} from '../components/Tweet/Tweet'
import {SideMenu} from '../components/SideMenu/SideMenu'


export const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth={'lg'}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                        <Paper className={classes.tweetsHeader} variant={'outlined'}>
                            <Typography variant={'h6'}>Главная</Typography>
                        </Paper>
                        {[...new Array(20).fill(
                            <Tweet
                                text={`Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, 
                            но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., 
                            то есть более двух тысячелетий назад.`
                                }
                                classes={classes}
                                user={{
                                    fullName: 'Zina Ivano',
                                    userName: 'ZinaIvano',
                                    avatarUrl: `https://images.unsplash.com/photo-1605020614138-eef9ad0c5164?ixlib=
                                rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80`
                                }}
                            />
                        )]}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth placeholder={'Поиск по Твиттеру'}/>
                </Grid>
            </Grid>
        </Container>
    )
}


export const useHomeStyles = makeStyles((theme: Theme) => ({
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
        width: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgb(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 10px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out'
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(2),
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
        paddingTop: 15,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: theme.spacing(5.5),
        height: theme.spacing(5.5),
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: -13,
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