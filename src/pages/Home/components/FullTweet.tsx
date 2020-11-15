import React from 'react'
import {useParams} from 'react-router-dom'
import {Tweet} from '../../../components/Tweet/Tweet'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTweetData, setTweetData} from '../../../store/ducks/tweet/actionCreators'
import {selectTweetData, selectTweetIsLoading} from '../../../store/ducks/tweet/selectors'
import {useHomeStyles} from '../homeTheme'
import CircularProgress from '@material-ui/core/CircularProgress'

export const FullTweet: React.FC = () => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectTweetIsLoading)
    const params: { id?: string } = useParams()
    const id = params.id

    React.useEffect(() => {
        if (id) dispatch(fetchTweetData(id))
        return () => {
            dispatch(setTweetData(undefined))
        }
    }, [dispatch, id])

    if (isLoading) return <div className={classes.tweetsCentered}><CircularProgress/></div>
    if (tweetData) return <Tweet{...tweetData} classes={classes}/>

    return null
}