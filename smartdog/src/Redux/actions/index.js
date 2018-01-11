
import axios from 'axios';

export const animalSEND = (payload) => {

  return(dispatch)=>{
    axios.post('http://localhost:5000/addname', {
      name: payload
    })
    .then(response => {
      dispatch(AXIOSRESPONSE(response.data, "ANIMAL_RETURN"))
    })
    .catch(error => {
      dispatch(AXIOSCATCH(error))
    })

  }
}

export const animalsRETRIEVE = () => {

  return(dispatch)=>{
    axios.get('http://localhost:5000/allnames', {
    })
    .then(response => {
      dispatch(AXIOSRESPONSE(response.data, "ANIMAL_RETURN"))
    })
    .catch(error => {
      dispatch(AXIOSCATCH(error))
    })

  }
}

export const animalDELETE = (payload) => {
  var url = "http://localhost:5000/deleteName/"+payload;
  return(dispatch)=>{
    axios.delete(url)
    .then(response => {
      dispatch(AXIOSRESPONSE(response.data, "ANIMAL_RETURN"))
    })
    .catch(error => {
      console.log('oh snap dawg - that bytes: ', error);
      dispatch(AXIOSCATCH(error))
    })

  }
}


export const AXIOSRESPONSE = (array, whereto) => {
  console.log('value of array in AXIOSSUCCESS', array);
  console.log('value of whereto in AXIOSSUCCESS', whereto);
  return{
    type: whereto,
    data: array
  }
}

export const AXIOSCATCH = (error) => {
  console.log('oh snap dawg - that bytes: ', error);
}



export const counterADD = () => {
  console.log('inside counterADD');
  return {
    type: 'COUNTER_ADD',
  }
}

export const counterSUBTRACT = () => {
  console.log('inside counterSUBTRACT');
  return {
    type: 'COUNTER_SUBTRACT',
  }
}
