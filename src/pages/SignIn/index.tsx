import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/Group';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';

export const SignIn: React.FC = () => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = () => setVisibleModal('signIn');
  const handleClickOpenSignUp = () => setVisibleModal('signUp');
  const handleCloseModal = () => setVisibleModal(undefined);

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
              <ModeCommentOutlinedIcon
                className={classes.blueSideListInfoIcon}/>
              Присоединяйся к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color={'primary'}
            className={classes.loginSideTwitterIcon}/>
          <Typography
            className={classes.loginSideTitle} variant={'h4'}
            gutterBottom>
            Узнайте, что проиходит в мире прямо сейчас.
          </Typography>
          <Typography className={classes.loginSideFollowText}>
            <b>Присоединяйся к Твиттеру прямо сейчас!</b>
          </Typography>
          <br/>
          <Button
            onClick={handleClickOpenSignUp}
            className={classes.loginSideRegButton}
            variant={'contained'} color={'primary'}
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            className={classes.loginSideRegButton}
            variant={'outlined'}
            color={'primary'}
            fullWidth
          >
            Войти
          </Button>
          <LoginModal
            open={visibleModal === 'signIn'}
            onClose={handleCloseModal}
          />
          <RegisterModal
            open={visibleModal === 'signUp'}
            onClose={handleCloseModal}
          />
        </div>
      </section>
    </div>
  );
};

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
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
    fontSize: 12,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));
