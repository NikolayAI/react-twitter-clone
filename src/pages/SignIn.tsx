import React, {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {Typography} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import GroupIcon from '@material-ui/icons/Group'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import {ModalBlock} from '../components/ModalBlock/ModalBlock'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'


export const SignIn = () => {
    const classes = useStylesSignIn()
    const [visibleSignIn, setVisibleSignIn] = useState(false)

    const handleClickOpen = () => setVisibleSignIn(true)
    const handleClose = () => setVisibleSignIn(false)


    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color={'primary'} className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={'h6'}>
                            <SearchIcon className={classes.blueSideListInfoIcon}/>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={'h6'}>
                            <GroupIcon className={classes.blueSideListInfoIcon}/>
                            Узнайте, о чем говорят люди.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant={'h6'}>
                            <ModeCommentOutlinedIcon className={classes.blueSideListInfoIcon}/>
                            Присоединяйся к общению.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color={'primary'} className={classes.loginSideTwitterIcon}/>
                    <Typography className={classes.loginSideTitle} variant={'h4'} gutterBottom>
                        Узнайте, что проиходит в мире прямо сейчас.
                    </Typography>
                    <Typography className={classes.loginSideFollowText}>
                        <b>Присоединяйся к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <br/>
                    <Button className={classes.loginSideRegButton} variant={'contained'} color={'primary'} fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={handleClickOpen} variant={'outlined'} color={'primary'} fullWidth>
                        Войти
                    </Button>
                    <ModalBlock onClose={handleClose} visible={visibleSignIn} title={'Войти в аккаунт'} classes={classes}>
                        <FormControl component={'fieldset'} fullWidth>
                            <FormGroup aria-label={'position'} row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id={'email'}
                                    label={'E-mail'}
                                    InputLabelProps={{shrink: true}}
                                    variant={'filled'}
                                    type={'email'}
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id={'password'}
                                    label={'Пароль'}
                                    InputLabelProps={{shrink: true}}
                                    variant={'filled'}
                                    type={'password'}
                                    fullWidth
                                />
                                <Button onClick={handleClose} variant={'contained'} color={'primary'} fullWidth>
                                    Войти
                                </Button>
                                <br/>
                                <br/>
                                <br/>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    )
}


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '75%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200%',
        height: '200%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: 300,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 15,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        flex: '0 0 50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 300,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 24,
        marginBottom: 60,
        marginTop: 20,
    },
    loginSideFollowText: {
        fontWeight: 700,
        fontSize: 12,
    },
    loginSideRegButton: {
        marginBottom: 20,
    },
    loginSideField: {
        marginBottom: 18,
    }
}))
