import React from 'react';
import _ from 'lodash';
import PropType from 'prop-types';

function Pagination({pageSize,currentPage, itemsCount, onPageChange}) {
                        //98   //20
    const pageCount = Math.ceil(itemsCount / pageSize)      //5
    const pages =  _.range(1, pageCount+1)

    // const pages = []    //[1,2,3,4,5]
    // for(let i=1; i<=pageCount; i++){
    //     pages.push(i)
    // }
    //console.log(pages)

    if(pageCount === 1)
        return null;
  
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                
                {
                    pages.map( page => (
                        <li key={page} onClick={ ()=> onPageChange(page) } 
                            className={page === currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link" href="#">{page}</a>
                        </li>
                    ))
                }
                
                <li className="page-item"><a className="page-link" href="/">Next</a></li>
            </ul>
      </nav>
    );
}

Pagination.propTypes = {
    pageSize : PropType.number.isRequired,
    currentPage : PropType.number.isRequired,
    itemsCount : PropType.number.isRequired,
    onPageChange :PropType.func.isRequired
}

export default Pagination;