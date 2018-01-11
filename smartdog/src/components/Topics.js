import React, { Component } from 'react';
import { connect } from 'react-redux'
import { animalSEND, animalsRETRIEVE, animalDELETE} from '../Redux/actions'

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalName: '',
      animalList: []
    }
  }

  animalHandler(value){
    if (value==="add"){
      this.props.sendANIMAL(this.state.animalName)
    }else if(value==="delete"){
      this.props.deleteANIMAL(this.state.animalName)
    }else if(value==="retrieveall"){
      this.props.retrieveANIMALS()
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.animalreturn!=nextProps.animalreturn){
      var newAnimalsList = [];
      nextProps.animalreturn.forEach(animal=>{
        newAnimalsList.push(animal.name);
      })
      this.setState({
        animalList: newAnimalsList
      })
    }
  }

  render() {
    return (
      <div className="Topics">
        <h1>
          This is the Topics Page you dig?
        </h1>
        <br/>
        <h2>Input your favorite animal (hint: it is platypus)</h2>
        <br/>
        <input placeholder='animule' onChange={(e)=>{this.setState({animalName: e.target.value})}}/>
        <br/>
        <button onClick={()=>{this.animalHandler("add")}}>Add Animal to Daterbase!</button>
        <br/>
        <button onClick={()=>{this.animalHandler("delete")}}>Delete Animal from Daterbase!</button>
        <br/>
        <button onClick={()=>{this.animalHandler("retrieveall")}}>Retrieve all animals in Daterbase</button>
        <br/>
        <h1>Here are the animules in the daterbase</h1>
        <div>
          {this.state.animalList.map(function(d, idx){
             return (<li key={idx}>{d}</li>)
           })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return({
      sendANIMAL: (e)=>{dispatch(animalSEND(e))},
      retrieveANIMALS: (e)=>{dispatch(animalsRETRIEVE())},
      deleteANIMAL: (e)=>{dispatch(animalDELETE(e))}
    })
}

function mapStateToProps(state) {
    return({
      animalreturn: state.animal
    })
}


export default connect(
    mapStateToProps, mapDispatchToProps)(
    Topics
)
