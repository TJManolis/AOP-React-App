import React from 'react';
import Main from './Main.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';

class App extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;