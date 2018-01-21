import React from 'react';

const filter = () => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2">
            <select className='form-control' id='selectBox'>
                <option value='0'>Genres</option>            
                <option value='1'>Drama</option>            
                <option value='2'>Action</option>            
            </select>
        </div>
    );
};
export default filter;