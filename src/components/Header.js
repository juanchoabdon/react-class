import React, { Component } from 'react';


class Header extends Component {
   

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div>
       <h1> Header </h1>
       <p> dhsuhfush {this.props.in}</p>
       </div>
    );
  }
}

export default Header;