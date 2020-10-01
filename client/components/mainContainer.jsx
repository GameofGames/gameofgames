// access state and dispatch
// have children - messageboard, gameDisplay, scoreBoard

import React, { Component } from "react";
import { connect } from 'react-redux';
import MessageBoard from './MessageBoard'
import GameDisplay from './gameDisplay.jsx';
import ScoreBoard from './scoreBoard.jsx';
import * as actions from '../actions/actions'


const mapStateToProps = (state) => ({
  usersList: state.usersList,
  round: state.round,
  word: state.word,
  curUser: state.curUser
});
const mapDispatchToProps = dispatch => ({
  addPoint: index => dispatch(actions.addPoint(index)),
  addRound: roundNum => dispatch(actions.addRound(roundNum)),
  addWord: word => dispatch(actions.addWord(word))
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="mainContainer">
        <ScoreBoard usersList= {this.props.usersList}/>
        <GameDisplay round= {this.props.round} addRound={this.props.addRound} word= {this.props.word} addWord={this.props.addWord}/>
        <MessageBoard curUser={this.props.curUser} word={this.props.word} addPoint={this.props.addPoint}/>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);
