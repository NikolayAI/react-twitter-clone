import React from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { useHomeStyles } from '../../pages/Home/homeTheme';
import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import Hidden from '@material-ui/core/Hidden';
import { ModalBlock } from '../ModalBlock/ModalBlock';
import { AddTweetForm } from '../AddTweetForm/AddTweetForm';
import { Link } from 'react-router-dom';

type SideMenuPropsType = {
  classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuPropsType> = ({ classes }) => {

  const [visibleAddTweet, setVisibleAddTweet] = React.useState(false);

  const handleClickOpenAddTweet = () => setVisibleAddTweet(true);
  const onCloseAddTweet = () => setVisibleAddTweet(false);

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to={'/home'}>
          <IconButton className={classes.logo} aria-label="delete"
                      color={'primary'}>
            <TwitterIcon className={classes.logoIcon}/>
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant={'h6'}>
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant={'h6'}>
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant={'h6'}>
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant={'h6'}>
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant={'h6'}>
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PermIdentityIcon className={classes.sideMenuListItemIcon}/>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel}
                        variant={'h6'}>
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button onClick={handleClickOpenAddTweet}
                className={classes.sideMenuTweetButton}
                variant={'contained'}
                color={'primary'}
                fullWidth>
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp><CreateIcon/></Hidden>
        </Button>
        <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} classes={classes}/>
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};