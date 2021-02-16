import React, {Component} from 'react';
import './Dice.css';
import one from '../../Images/one.png'
import two from '../../Images/two.png'
import three from '../../Images/three.png'
import four from '../../Images/four.png'
import five from '../../Images/five.png'
import six from '../../Images/six.png'
import arcade from '../../Images/arcade.png'


class Dice extends Component{
    constructor(){
        super();

        this.state = {
            diceImages: [one, two, three, four, five, six],
            diceOne: 1,
            diceTwo: 1,
            diceImageOne: one,
            diceImageTwo: one,
            scoreOne: 0,
            scoreTwo: 99,
            roundScore: 0,
            togglePlayer: true,
            toggleWin: false,
            winner: "P1"
        }
    }

    rollDice = () => {
        this.setState({
            diceOne: Math.floor(Math.random() * 6) + 1,
            diceTwo: Math.floor(Math.random() * 6) + 1,
            diceImageOne: this.state.diceImages[this.state.diceOne - 1],
            diceImageTwo: this.state.diceImages[this.state.diceTwo - 1],
        })

        if(this.state.diceOne === 1 || this.state.diceTwo === 1){
            this.setState({
                togglePlayer: !this.state.togglePlayer,
                roundScore: 0
            })
        }

        else{
            this.setState({
                roundScore: this.state.roundScore += this.state.diceOne + this.state.diceTwo
            })
        }

        //if players scores go over 100 they win
        if((this.state.scoreOne + this.state.roundScore) >= 100 && this.state.togglePlayer === true){
            this.setState({
                toggleWin: true,
            })
        }

        if((this.state.scoreTwo + this.state.roundScore) >= 100 && this.state.togglePlayer === false){
            this.setState({
                toggleWin: true,
                winner: "P2"
            })
        }
    }

    saveScore = () => {
        if(this.state.togglePlayer === true){
            this.setState({
                scoreOne: this.state.scoreOne += this.state.roundScore,
                togglePlayer: !this.state.togglePlayer,
                roundScore: 0
            })
        }
        else {
            this.setState({
                scoreTwo: this.state.scoreTwo += this.state.roundScore,
                togglePlayer: !this.state.togglePlayer,
                roundScore: 0
            })
        }
    }

    playAgain = () => {
        this.setState({
            diceImageOne: one,
            diceImageTwo: one,
            scoreOne: 0,
            scoreTwo: 0,
            roundScore: 0,
            togglePlayer: true,
            toggleWin: false,
            winner: "P1"
        })
    }

    render(){
        return(
            <div className="Dice">
                <img className="arcade" src={arcade}/>

                <div className='dicegame'>
                    <div className="diceplayers">
                        <h3>{this.state.togglePlayer ? `P1 ${this.state.scoreOne}<-` : `P1 ${this.state.scoreOne}`}</h3>
                        <h3>{this.state.togglePlayer ? `P2 ${this.state.scoreTwo}` : `-> P2 ${this.state.scoreTwo}`}</h3>
                    </div>


                    <div onClick={() => this.rollDice()} className="theDice">
                        <img className="diceOne" src={this.state.diceImageOne}/>
                        <img className="diceTwo" src={this.state.diceImageTwo}/>
                    </div>
                    
                    { !this.state.toggleWin ? 
                    <div>
                        <h4>Round Score: {this.state.roundScore}</h4>
                        <button className="roll" onClick={() => this.rollDice()}>Roll</button>
                        <button className="roll" onClick={() => this.saveScore()}>Stay</button>
                    </div>:
                    <div className="winMessage">
                        <h2>{this.state.toggleWin ? `${this.state.winner} Wins!`: ""}</h2>
                        <button className="roll" onClick={() => {this.playAgain()}}>Play Again</button>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Dice;