export const validate = (input) => {
  let errors = {}

  if(!input.name) errors.name = 'Must have a name'
  let pattern = /^[a-zA-Z0-9]*$/
  if(!pattern.test(input.name)) errors.name = 'Cannot contain special characters'

  return errors
}