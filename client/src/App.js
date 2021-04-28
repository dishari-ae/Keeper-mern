import React, { Component } from 'react';
import Navbarr from './components/Navbarr';
import Memory from './components/Memory';
import ItemModal from './components/ItemModal';
import { Container} from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbarr />
      <Container>
      <ItemModal />
      <Memory />
      </Container>
    </div>
    </Provider>
  );
}
}

export default App;