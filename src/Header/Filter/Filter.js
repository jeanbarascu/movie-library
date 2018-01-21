import React from 'react';

const filter = (props) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2">
            <select className='form-control' id='selectBox'>
                <option value='0'>Genres</option>
                {props.genresList.map(genre => {
                    return <option value={genre.id} key={genre.id}>{genre.name}</option>;
                })}          
            </select>
        </div>
    );
};
export default filter;