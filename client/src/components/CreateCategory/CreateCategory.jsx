import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../redux/actions';
import styles from './CreateCategory.module.css'


function CreateCategory() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState({})

  function handleChange(e) {
    let item = e.target.name
    setCategory({...category, [item]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Category: ',category)
    // if(Object.keys(errors).length) {
    //   return alert('The form is not right, please check')
    // }
    dispatch(createCategory(category))
    document.getElementById('createCategory').reset()
  }

  return (
      <div>
        <form id='createCategory' onSubmit={e => handleSubmit(e)}>
          <label>Category name: </label>
          <input type="text" name='name' id='categoryName' onChange={e => handleChange(e)}/>
          <label>Description: </label>
          <input type="text" name='description' id='categoryDesciption' onChange={e => handleChange(e)}/>
          <input type="submit" value='Create Category'/>
        </form>
      </div>
  );
};

export default CreateCategory;