import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

let user = {
    firstName: 'microbe',
    lastName: 'fou',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
}
function fullName(user){
    return user.firstName + ' ' + user.lastName;
}

function tick(){
    const element = (
        <div>
            <h1>Bonjour {user.firstName}</h1>
            <h2>Il est {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element,document.getElementById('root2'));
}
setInterval(tick, 1000);

//REACT Sans JSX
let heart = React.createElement('span', null, user.firstName + '😍');
let el = React.createElement('h1', null, 'Hello ' , heart);

ReactDOM.render(
    el,
    document.getElementById('root3')
);

ReactDOM.render(
    <div><h1>Bonjour {user.firstName}!</h1><br/>
    <h2>Votre nom de famille est: {user.lastName}!</h2><br/>
    <h3>{fullName(user)} généré par la fonction(fullName)</h3>
    <img src={user.avatar} className="mon-image" width= '300 px' />
    </div>,
    document.getElementById('root')
);

class Welcome extends React.Component{
    render(){
        return (
        <h1 className={this.props.gender.toLowerCase()}>
            Bonjour {this.props.name}</h1>
            );
    }
}
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timer = setInterval(() => {
          // On met à jour l'état local du composant
          this.setState({date: new Date()});
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.timer);
      }

    render(){
        return (
            <h2>Il est {this.state.date.toLocaleTimeString('fr-FR', {timeZone: this.props.timeZone})}
             à {this.props.timeZone}
            </h2>
            );
    }
}

class MyCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number: 0}
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.setState((state) => ({
                number: ++state.number
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
      }
    
    render(){
        return 'COMPTEUR : ' + this.state.number;
    }
}

class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {isToggle: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggle ? 'On':'Off'}
                </button>
        )
    }
}

//setInterval(() => {
    ReactDOM.render(
        <div>
          <Welcome name="Microbe" gender='Fille' />
          <Welcome name="Adama" gender='Garcon'/>
          <Welcome name="Matthieu" gender='Garcon'/>
          <Clock timeZone="Europe/Paris"/>
          <Clock timeZone="Europe/London"/>
          <MyCounter />
          <Button />
        </div>,
        document.getElementById('root5')
      );
//}, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
