import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Routes from './Routes'
import { Layout } from 'antd';
import {Link} from 'react-router-dom'
const {
  Header, Footer, Content,
} = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <Header><Link to ="/"><h2 style={{ color: "white" }}>FCC Biblioteca</h2> </Link></Header>
        <Content style={{ display: "flex", justifyContent: "center" }}>
          <Routes />
        </Content>
        <Footer>Code by Mike</Footer>
      </Layout >
    )
  }
}

export default App;