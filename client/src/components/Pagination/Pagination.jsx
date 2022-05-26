import style from './Pagination.module.css'

function Pagination({ productsPerPage, totalProducts, paginate }) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    };
    return (
        <div className="w-full justify-items-center">
<nav className={style.container}>
            <ul className={style.pageList}>
                {pageNumbers.map(number => {
                    return (
                        <li
                            key={number}
                            className={style.items}
                        >
                            <a
                                onClick={() => paginate(number)}
                                href='#top'
                                className={style.pages}
                            >{number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </div>
        
    )
}

export default Pagination;