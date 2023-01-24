import './App.css';
import React from 'react';
import { fields } from './descriptions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fish: 'default', chicken: 'disabled', duck: 'default' };
  }
  handleClick = (e) => {
    const id = e.target.id;
    if (this.state[id] !== 'disabled') {
      this.setState({[id]: 'selected'})
    }
    if (this.state[id] === 'selected') {
      this.setState({[id]: 'selectedHover'})
    }
  };
  handleMouseOver = (e) => {
    const id = e.target.id;
    this.state[id] === 'default' && this.setState({[id]: 'hover'});
  };
  handleMouseOut = (e) => {
    const id = e.target.id;
    if (this.state[id] === 'hover' || this.state[id] === 'selectedHover') {
      this.setState({[id]: 'default'});
    };
  };
  render() {
    return (
      <div className='center-screen'>
        <div className='text'>
          Ты сегодня кормил кота?
        </div>
        <div className='cards'
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={this.handleClick}
        >
        {fields.map((cat) => {
          return (
            <div className="card card-block"
              id={cat.id}
              key={cat.id}
            >
              <img src={cat[this.state[cat.id]]}
                id={cat.id}
                key={cat.id}
                alt='prettyCat'/>
            </div>
            );
        })}
          </div>
       </div>
      );
  }
}

export default App;

