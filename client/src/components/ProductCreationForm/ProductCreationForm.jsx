import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, createProduct, getProducts } from '../../redux/actions';
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
        ranking: null,
        price: null,
        categories: [],
        stock: null,
    });

    useEffect(() => {
        if (!allCategories.length) {
            dispatch(getCategories())
        };
    }, [dispatch, allCategories.length]);

    const handleInputChange = function (e) {
        let data;
        if (e.target.name === 'ranking') {
            data = Number(e.target.value)
        }
        if (e.target.name === 'stock') {
            if (/^[0-9]{0,2}$/.test(e.target.value)) {
                data = Number(e.target.value)
            }
        }
        if (e.target.name === 'price') {
            if (e.target.value.length >= 4) {
                if ((/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/.test(e.target.value))) {
                    data = parseFloat(e.target.value);
                } else {
                    setErrors(validate({
                        ...input,
                        [e.target.name]: e.target.value
                    }))
                }
            }
        }
        setInput({
            ...input,
            [e.target.name]: (data === 0 || data) ? data : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: (data === 0 || data) ? data : e.target.value
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
        if (Object.keys(errors).length === 0) {
            try {
                alert("Product created succesfully");
                console.log(input)
                //CORREGIR CON NUEVAS ACTIONS
                // dispatch(createProduct(input));
                // dispatch(getProducts());
                // e.target.reset();
                // window.location.href = '/home';
            } catch (err) {
                console.log(err.message);
            }
        } else {
            alert('All the mandatory fields are not filled');
        };
    };
    console.log(errors, input)
    return (
        <div className={style.mainContainer}>
            <h2 className={style.title}>Create your course</h2>
            <div className={style.container}>

                <form onSubmit={handleSubmit} className={style.for}>
                    <div className={style.fromNameToGenres}>
                        <label>Course name:</label>
                        <input name="name" onChange={handleInputChange} placeholder="Product's name" />
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
                        <input name="image" onChange={handleInputChange} placeholder="URL Image" />
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
    if (!input.name || input.name.length < 2 || typeof input.name !== 'string') {
        errors.name = 'The course name must be at least 2 characters long.';
    } else if (/["`'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.name)) {
        errors.name = 'The course name can not contain special characters.';
    };
    if (input.description.length < 10) {
        errors.description = 'The description must be at least 10 characters long.';
    };
    if (!input.ranking || input.ranking > 5 || input.ranking < 0 || input.ranking % 1 !== 0 || typeof input.ranking !== 'number') {
        errors.ranking = 'The ranking must be a integer between 0 and 5.';
    };
    if (input.categories.length < 1) {
        errors.categories = 'The curse must have at least one category.';
    };
    // if (input.image) {
    //     errors.image = 'XXXXXXXXX';
    // };
    if (!input.createBy || input.createBy.length < 3) {
        errors.createBy = 'The creator of the course is mandatory information.';
    };
    if (!input.price || typeof input.price !== 'number' || input.price < 0) {
        errors.price = 'The price of the course must be completed with the $0.00 USD format.';
    };
    if (!input.stock || typeof input.stock !== 'number') {
        errors.stock = 'The course should have at least one vacancy.';
    };
    return errors;
};


export default ProductCreationForm;