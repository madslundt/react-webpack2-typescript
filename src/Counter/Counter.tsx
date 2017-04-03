import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export class Counter extends React.Component <void, {number : number}> {
  constructor() {
    super();
    this.state = {
      number: 0
    };

    this.increment = this
      .increment
      .bind(this)
  }

  componentDidMount() {
    setInterval(this.increment, 1000);
  }

  increment() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (<RaisedButton label={this.state.number}/>);
  }
}