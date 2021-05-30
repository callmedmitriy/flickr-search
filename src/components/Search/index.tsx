import React from 'react';

import { useAppDispatch } from '../../hooks'
import { flickrActions } from '../../redux/Flickr'
import useDebounce from '../../hooks/useDebounce';

import './style.scss';

const Search:React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = React.useState('');
    const debouncedSearchValue = useDebounce(searchValue, 500);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
    }

    React.useEffect(() => {
        dispatch(flickrActions.changeSearchQuery(debouncedSearchValue))
    }, [debouncedSearchValue])

    return (
        <div className="search">
            <label htmlFor="search" className="search__label">Search images:</label>
            <input id="search" className="search__input" type="text" value={searchValue} onChange={onChangeHandler} placeholder="Enter your query"/>
        </div>
    )
}

export default Search