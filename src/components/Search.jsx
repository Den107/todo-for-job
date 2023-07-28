import React from 'react';

const Search = () => {
    return (
        <div className="todo__search">
            <i className="fa-solid fa-magnifying-glass" style={{color: '#5b63a9'}}></i> <input type="text"
                                                                                               placeholder="Название задачи"/>
        </div>
    );
};

export default Search;