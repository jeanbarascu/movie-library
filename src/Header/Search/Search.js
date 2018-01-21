import React from 'react';

const search = () => {
    return (
        <div className="col-sm-12 col-md-5 col-lg-3 col-xl-2">
            <input        
                className="form-control" 
                id="searchInput"
                type="text"
                placeholder="Search by title"
                autoComplete="off"
                autoFocus="true" />
        </div>
    );
};


export default search;