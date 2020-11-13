import React from 'react'
import {Grid} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {Tweet} from '../../components/Tweet/Tweet'
import {SideMenu} from '../../components/SideMenu/SideMenu'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'
import {AddTweetForm} from '../../components/AddTweetForm/AddTweetForm'
import {useHomeStyles} from './homeTheme'
import {SearchTextField} from '../../components/SearchTextField/SearchTextField'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTweets} from '../../store/ducks/tweets/actionCreators'
import {selectTweetsIsLoading, selectTweetsItems} from '../../store/ducks/tweets/selectors'
import CircularProgress from '@material-ui/core/CircularProgress'


export const Home: React.FC = () => {
    const dispatch = useDispatch()
    const classes = useHomeStyles()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectTweetsIsLoading)

    React.useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth={'lg'}>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                        <Paper className={classes.tweetsHeader} variant={'outlined'}>
                            <Typography variant={'h6'}>Главная</Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <AddTweetForm classes={classes}/>
                            </div>
                            <div className={classes.addFormBottomLine}/>
                        </Paper>
                        {isLoading ? (
                            <div className={classes.tweetsCentered}><CircularProgress/></div>
                        ) : tweets.map(tweet =>
                            <Tweet
                                key={tweet._id}
                                classes={classes}
                                text={tweet.text}
                                user={tweet.user}
                            />
                        )}
                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            fullWidth
                            variant={'outlined'}
                            placeholder={'Поиск по Твиттеру'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={'start'}>
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant={'outlined'}>
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary={'Санкт-Петербург'}
                                        secondary={
                                            <Typography component={'span'} variant={'body2'}>
                                                Твитов: 3 331
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component={'li'}/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary={'#коронавирус'}
                                        secondary={
                                            <Typography component={'span'} variant={'body2'}>
                                                Твитов: 163 122
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component={'li'}/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary={'Россия'}
                                        secondary={
                                            <Typography component={'span'} variant={'body2'}>
                                                Твитов: 13 554
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component={'li'}/>
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant={'outlined'}>
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={'Yumi Chu'}
                                            src={`https://images.unsplash.com/photo-1602995660357-20e5ebaa4d37?ixlib=
                                            rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`
                                            }
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={'Dock of Shame'}
                                        secondary={
                                            <Typography component={'span'} variant={'body2'}>
                                                @FavDockOfShame
                                            </Typography>
                                        }
                                    />
                                    <Button color={'primary'}>
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component={'li'}/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}