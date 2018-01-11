import React, { Component } from 'react';
import { counterADD, counterSUBTRACT} from '../Redux/actions'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yolo: 'stuffgoeshereDAWG'
    }
  }

  buttonHandler(value){
    console.log('inside buttonHandler');
    if (value==="add"){
      this.props.addCOUNTER()
    }else if (value==="subtract"){
      this.props.subtractCOUNTER()
    }
  }


  render() {
    return (
      <div className="Home">
        <h1>
          This is the Home Page you dig?
        </h1>
        <br/>
        <h2>
          Counter dileo {this.props.counterreturn}
        </h2>

        <button onClick={()=>{this.buttonHandler('add')}}>Add Button YAY</button>
        <br/>
        <button onClick={()=>{this.buttonHandler('subtract')}}>Subtract Button ALSO YAY</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return({
      // signintoserver: (e)=>{dispatch(signupUSER(e))},
      // setthetoken: (e)=>{dispatch(setTOKEN(e))}
      // sendthepost: (e)=>{dispatch(sendPOST(e))},
      // getuserposts: (e)=>{dispatch(userPOSTS(e))}
      addCOUNTER: (e)=>{dispatch(counterADD(e))},
      subtractCOUNTER: (e)=>{dispatch(counterSUBTRACT(e))},
    })
}

function mapStateToProps(state) {
    return({
      counterreturn: state.counter,
    })
}


export default connect(
    mapStateToProps, mapDispatchToProps)(
    Home
)
