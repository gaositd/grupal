import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, createProduct, getProducts  } from '../../redux/actions';
import style from './ProductCreationForm.module.css';

function ProductCreationForm() {
    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.categories);

    const [input, setInput] = React.useState({
        name: '',
        description: '',
        image: '',
        ranking: 0,
        createBy: '',
        price: 0,
        categories: [],
        stock: 0,
    });

    const [errors, setErrors] = React.useState({
        name: '',
        description: '',
        image: '',
        ranking: 0,
        price: 0,
        categories: [],
        stock: 0,
    });

    useEffect(() => {
        if(!allCategories.length){
            dispatch(getCategories())
        };
    }, [dispatch]);

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    const handleCheckboxChange = function (e) {
        if (input.categories.includes(e.target.value)) {
            setInput({
                ...input,
                categories: input.categories.filter(c => c !== e.target.value)
            });
        } else {
            setInput({
                ...input,
                categories: [...input.categories, e.target.value]
            });
            setErrors(validate({
                ...input,
                categories: [...input.categories, e.target.value]
            }));
        };
    };

    const handleSubmit = function (e) {
        e.preventDefault();
        console.log(input)
        // if (Object.keys(errors).length === 0) {
        //     try {
        //         alert("Product created succesfully");
        //         //CORREGIR CON NUEVAS ACTIONS
                dispatch(createProduct(input));
        //         dispatch(getProducts());
        //         e.target.reset();
        //         window.location.href = '/home';
        //     } catch (err) {
        //         console.log(err);
        //     }
        // } else {
        //     alert('All the mandatory fields are not filled');
        // };
    };

    return (
        <div className={style.mainContainer}>
            <h2 className={style.title}>Create your course</h2>
            <div className={style.container}>

                <form onSubmit={handleSubmit} className={style.for}>
                    <div className={style.fromNameToGenres}>
                        <label>Course name:</label>
                        <input name="name" onChange={handleInputChange} placeholder="Product's name"/>
                        <span>{errors.name}</span><br />

                        <label>Description:</label>
                        <textarea
                            placeholder="What`s the game about"
                            name="description"
                            onChange={handleInputChange}
                            rows='3'
                            cols='40' />
                        <span>{errors.description}</span><br />

                        <label>Image:</label>
                        <input name="image" onChange={handleInputChange} placeholder="URL Image"/>
                        <span>{errors.image}</span><br />

                        <label>Ranking:</label>
                        <input name="ranking" onChange={handleInputChange} placeholder="Ranking" />
                        <span>{errors.ranking}</span><br />

                        <label>Created by:</label>
                        <input name="createBy" onChange={handleInputChange} placeholder="Created by" />
                        <span>{errors.createBy}</span><br />

                        <label>Price:</label>
                        <input name="price" onChange={handleInputChange} placeholder="$0.00 USD" />
                        <span>{errors.price}</span><br />

                        <label>Vacancies:</label>
                        <input name="stock" onChange={handleInputChange} placeholder="Stock available" />
                        <span>{errors.stock}</span><br />
                        
                        <label>Categories:</label>
                        <span className={style.asd}>{errors.gGenres}</span>
                    </div>

                    <div className={style.genres}>
                        {allCategories ? allCategories.map(ctgry => {
                            return (
                                <div key={ctgry.id} className={style.genresItems}>
                                    <input
                                        type='checkbox'
                                        id={ctgry.name}
                                        name='categories'
                                        onChange={handleCheckboxChange}
                                        value={JSON.stringify(
                                            ctgry.id)}>
                                    </input>
                                    <label>{ctgry.name}</label>
                                </div>
                            )
                        }) : 'No funca'}

                        <button type='submit' className={style.button}>Create Course</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export const validate = function (input) {
    let errors = {};
    // if (!input.name || input.name.length < 2 || typeof input.name !== 'string') {
    //     errors.name = 'The videogame name must be at least 2 characters';
    // } else if (/["`'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.name)) {
    //     errors.name = 'The videogame name can not contain special characters';
    // };
    // if (input.description.length < 10) {
    //     errors.description = 'The description must be at least 10 characters long';
    // };
    // if (!/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(input.releaseDate)) {
    //     errors.releaseDate = 'The release date must be in the format YYYY-MM-DD';
    // };
    // if ((input.rating > 5) || (input.rating < 0) || /^(?:[1-9]\d{0,4}|0)\.\d$/.test(input.rating)) {
    //     errors.rating = 'The rating must be a number not greater than 5, and with at least two decimals';
    // };
    // if (input.gGenres.length < 1) {
    //     errors.gGenres = 'The videogame must have at least one genre';
    // };
    // if (input.platforms.length < 1) {
    //     errors.platforms = 'The videogame must have at least one platform';
    // };
    // if (input.gGenres.length < 1) {
    //     errors.gGenres = 'At least one genre must be selected';
    // };
    // if (input.platforms.length < 1) {
    //     errors.platforms = 'At least one platform must be selected';
    // };
    return errors;
};


export default ProductCreationForm;