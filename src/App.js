import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Routes from './Routes'
// const {
//   Header, Footer, Content,
// } = Layout;
class App extends Component {
  render() {
    return (
        <>
            <Routes />
            {/*<Header><Link to ="/"><h2 style={{ color: "white" }}>FCC Biblioteca</h2> </Link></Header>*/}
            {/*<Content style={{ display: "flex", justifyContent: "center" }}>*/}
            {/*</Content>*/}
            {/*<Footer>Code by Mike</Footer>*/}
        </>
    )
  }


}



export default App;
