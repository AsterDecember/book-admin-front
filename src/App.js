import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Routes from './Routes'
import { Layout } from 'antd';

const {
  Header, Footer, Content,
} = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <Header><h2 style={{ color: "white" }}>Industries App</h2></Header>
        <Content style={{ display: "flex", justifyContent: "center" }}>
          <Routes />
        </Content>
        <Footer>Code by Mike</Footer>
      </Layout >
    )
  }
}

export default App;