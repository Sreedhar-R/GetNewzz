import React from 'react';

const Pagination = ({paginate}) => {
    const pageNumbers = [1, 2, 3]
    return (
        <nav>
            <ul className='pagination'>
                {
                    pageNumbers.map((num) => {
                        return(
                            <li className="page-item">
                                <a onClick={() => {paginate(num)}} className="page-link">{num}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Pagination
