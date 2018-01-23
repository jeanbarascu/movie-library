import React from 'react';

const search = (props) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-4 col-xl-4">
            <input        
                className="form-control" 
                id="searchInput"
                type="text"
                placeholder="Search by title"
                autoComplete="off"
                autoFocus="true"
                onChange={props.changed} />
        </div>
    );
};


export default search;