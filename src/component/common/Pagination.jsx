import React from 'react';
import _ from 'lodash';
import PropType from 'prop-types';


function Pagination({ pageSize, itemCount, currentPage, onPageChange}) {

    const pageCount = Math.ceil(itemCount / pageSize)

    const pages = _.range(1, pageCount + 1)

    console.log(pages)
    
    if(pageCount===1)
    return null;

    return (
       
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                {
                    pages.map(page => (
                      
                        <li key={page} onClick={()=>onPageChange(page)} className={currentPage===page?"page-item active":"page-item"} aria-current={page}>
                            <a  className="page-link pagination " href="#">{page}</a>
                            </li>
                            
                    ))
                }

              
                <li className="page-item"><a className="page-link" href="/">Next</a></li>
            </ul>
        </nav>
        
    );
}
Pagination.propType = {
    pageSize : PropType.number.isRequired,
    pageCount : PropType.number.isRequired,
    itemCount : PropType.number.isRequired,
    currentPage : PropType.func.isRequired
}
export default Pagination;