import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import {useHomeStyles} from '../../pages/Home/homeTheme'
import {useSelector} from 'react-redux'
import {selectTagsIsLoaded, selectTagsItems} from '../../store/ducks/tags/selectors'
import {Link} from 'react-router-dom'


export type TagsPropsType = {
    classes: ReturnType<typeof useHomeStyles>
}


export const Tags: React.FC<TagsPropsType> = ({classes}) => {

    const items = useSelector(selectTagsItems)
    const isLoaded = useSelector(selectTagsIsLoaded)

    if (!isLoaded) return null

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant={'outlined'}>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    items.map(obj => (
                        <React.Fragment key={obj._id}>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <Link to={`/home/search?q=${obj.name}`}>
                                    <ListItemText
                                        primary={obj.name}
                                        secondary={
                                            <Typography component={'span'} variant={'body2'}>
                                                Твитов: {obj.count}
                                            </Typography>
                                        }
                                    />
                                    </Link>
                                </ListItem>
                            <Divider component={'li'}/>
                        </React.Fragment>
                    ))
                }
            </List>
        </Paper>
    )
}