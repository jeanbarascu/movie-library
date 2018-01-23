import React from 'react';

const filter = (props) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
            <select className='form-control' id='selectBox' onChange={props.changed}>
                <option value='0'>Genres</option>
                {props.genresList.map(genre => {
                    return <option value={genre.id} key={genre.id}>{genre.name}</option>;
                })}          
            </select>
        </div>
    );
};
export default filter;