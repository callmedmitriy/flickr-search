import React from 'react';
import { useDispatch } from 'react-redux';

import Spinner from '../Spinner';
import { useAppSelector } from '../../hooks';
import { flickrOperations } from '../../redux/Flickr';
import useInfinity from '../../hooks/useInfinity';

import Card from '../Card'

import './style.scss';

const CardList:React.VFC = () => {
    const dispatch = useDispatch();
    const { allowFetch, setAllowFetch } = useInfinity();
    const { query } = useAppSelector(state => state.flickr)
    const {data, isLoading, error} = useAppSelector(state => state.flickr)

    React.useEffect(() => {
        if (query) {
            dispatch(flickrOperations.getFlcikrData({query}))
        }
    }, [query])


    React.useEffect(() => {
        if (allowFetch && query && !isLoading) {
            if (data?.photos.page) {
                dispatch(flickrOperations.getFlcikrData({query, page: data?.photos.page + 1}))
                setAllowFetch(false);
            }
        }
    },[query, allowFetch, isLoading])

    if (error) return (<div className="card-list__message">Error loading data</div>)
    if (!query) return (<div className="card-list__message">Type search query to get result</div>)
    if (isLoading && !data) return (<div className="card-list__message"><Spinner /></div>)
    if (!data) return (<div className="card-list__message">Something went wrong</div>)

    return (
        <div className="wrapper card-list" id="list">
            <h3 className="card-list__header">Results for: <span className="card-list__header_query">{query}</span></h3>
            <h3 className="card-list__sub-header">Total found: <span className="card-list__sub-header_total">{data.photos.total}</span></h3>
            <div className="card-list__list">
                {
                    data?.photos.photo.map(photo => 
                        (<Card {...photo} key={photo.id} />)
                    )
                }
            </div>
            {isLoading && <Spinner />}
        </div>
    )
}

export default CardList;