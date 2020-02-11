import React from 'react'

export default function Pagination({postPerPage,totalPosts,paginate,currentPage}) {

    const pageNumbers = [];
    for (let index = 0; index < Math.ceil(totalPosts/postPerPage); index++) {
        pageNumbers.push(index);   
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(page => (
                    <li key={page} className={currentPage === page?"page-item active":"page-item"}>
                        <p className="page-link" onClick={()=>paginate(page)}>
                            {page}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
