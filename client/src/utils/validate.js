export const validate = (input) => { //create category validation
  let errors = {}

  if(!input.id) errors.id = 'Must have an id'

  if(!input.name) errors.name = 'Must have a name'
  let pattern = /^[a-zA-Z0-9]*$/
  if(!pattern.test(input.name)) errors.name = 'Cannot contain special characters'

  if(!input.description) errors.description = 'Must have a description'

  return errors
}