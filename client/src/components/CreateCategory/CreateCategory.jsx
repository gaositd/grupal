import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../redux/actions';
import { validate } from '../../utils/validate';
import styles from './CreateCategory.module.css'


function CreateCategory() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState({})
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    let item = e.target.name

    setErrors(validate({...category, [item]:e.target.value }))
    setCategory({...category, [item]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(Object.keys(errors).length || !Object.keys(category).length) {
      return alert('The form is not right, please check')
    }
    dispatch(createCategory(category))
    document.getElementById('createCategory').reset()
  }

  return (
      <div className={styles.container}>
        <form className={styles.lilcontainer} id='createCategory' onSubmit={e => handleSubmit(e)}>
          <label>Category id: </label>
          <input class={styles.dalebro} type="text" name='id' id='categoryId' onChange={e => handleChange(e)}/>
          <label>Category name: </label>
          <input class={styles.dalebro} type="text" name='name' id='categoryName' onChange={e => handleChange(e)}/>
          <label>Description: </label>
          <input class={styles.dalebro} type="text" name='description' id='categoryDesciption' onChange={e => handleChange(e)}/>
          <input class={styles.create} type="submit" value='Create Category'/>
        </form>
        <br />
        {errors.id && <h1>{errors.id}</h1>}
        {errors.name && <h1>{errors.name}</h1>}
        {errors.description && <h1>{errors.description}</h1>}
      </div>
  );
};

export default CreateCategory;