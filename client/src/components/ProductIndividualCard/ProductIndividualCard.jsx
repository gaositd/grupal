import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ProductIndividualCard.module.css';

function ProductIndividualCard(props) {
    const { id, name, price, image, categories, ranking} = props;

    return (
        <>
            <div className={style.container}>
                <div className={style.cardContainer}>
                    <div className={style.imgContainer}>
                        <img src={image} alt={name} className={style.image} />
                    </div>
                    <div className={style.info}>
                        <h1>{name}</h1>
                        <h3>{categories}</h3>
                        <p>price: {price}</p>
                        <p>ranking: {ranking}</p>
                        <NavLink
                            to={`/details/${id}`}
                            className={style.detailLink}
                        >See more details
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductIndividualCard;