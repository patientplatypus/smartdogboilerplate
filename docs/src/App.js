import React, { Component } from 'react';

//importing components
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'
//importing redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducersCombined from './Redux/reducers'
//importing react router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//take this - it will save your life :D :D :D
import renderIf from 'render-if';
//import js styling
import styled from 'styled-components';
import glamorous from 'glamorous';
import { css } from 'glamor';

let store = createStore(reducersCombined, applyMiddleware(thunk));

const GridBigContainer = styled.div`
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 10vh 90vh;
  grid-gap: 0vw;
  overflow: hidden;
  background-color: grey;
`

const ContentBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  position: relative;
  background: purple;
`

const TopBar = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  position: relative;
  background-color: skyblue;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Flex1 = styled.div`
  flex: 1;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <GridBigContainer>
              <TopBar>
                <FlexRow>
                  <Flex1>
                    <Link to="/">Home</Link>
                  </Flex1>
                  <Flex1>
                    <Link to="/about">About</Link>
                  </Flex1>
                  <Flex1>
                    <Link to="/topics">Topics</Link>
                  </Flex1>
                </FlexRow>
              </TopBar>
             <ContentBox>
               <Route path="/" exact render={()=><Home />}/>
               <Route path="/about" exact render={()=><About />}/>
               <Route path="/topics" exact render={()=><Topics />}/>
             </ContentBox>
            </GridBigContainer>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
