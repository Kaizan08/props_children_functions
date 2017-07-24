
import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';


class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer /></div>
    );
  }
}

export default BaseLayout;