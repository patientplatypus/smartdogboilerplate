
const animal = (state = [], action) => {
  switch (action.type) {
    case 'ANIMAL_RETURN':
      console.log('inside ANIMAL_RETURN reducer!');
      return state = action.data;
    default:
      return state
  }
}

export default animal
