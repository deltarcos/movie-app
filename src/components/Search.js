import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieDetail from './MovieDetail';

const Search = (props) => {
    const [value, setValue] = useState('')
    const inputValue = (event) => {
        setValue(event.target.value)
    }

    const searchValOnchange = (event) => {
        event.preventDefault();
        if (value != '') props.onSearch(value);
    }
    return (
        <div className='container'>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500, maxWidth: '500px', margin:'0 1rem 1rem 1rem'}} onSubmit={searchValOnchange}>
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <LocalMoviesIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter movie name Ex.Harry Potter"
                inputProps={{ 'aria-label': 'search movies' }}
                onChange={inputValue} value={value}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper>
        </div>
    )
}

export default Search;