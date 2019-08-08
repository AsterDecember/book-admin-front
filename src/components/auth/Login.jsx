import React,{Component} from 'react'
import {Icon, Form, Input, Button, Row, Col} from 'antd';
import {bindActionCreators} from "redux";
import {getLoginSaga} from "../../actions/authActions";
import {connect} from "react-redux";


class Login extends Component{
    state = {
        user:{
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {user} = this.state
        user[e.target.name]=e.target.value
        this.setState({user})
    }

    logIn = (e) =>{
        e.preventDefault();
        console.log('logIn')
        const {user} = this.state
        console.log(user)
        this.props.getLoginSaga(user)
    }

    render() {
        const { email,password } = this.state.user;
        if(this.props.authData.user._id){
            console.log('loged')
        }
        return(
            <Row type="flex" justify="center" className="h-100 align-items-center">
                <Col span={8}>
                    <h1 className="fcc-color">FCC Biblioteca</h1>
                    <Form onSubmit={this.logIn}>
                        <Input
                            style={{marginBottom:'1rem'}}
                            name='email'
                            placeholder="Correo"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value={email}
                            onChange={this.handleChange}
                            ref={node => this.userNameInput = node}
                        />
                        <Input.Password
                            style={{marginBottom:'1rem'}}
                            name='password'
                            placeholder="Contraseña"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value={password}
                            onChange={this.handleChange}
                        />
                        <Button type="primary" htmlType="submit">Entrar!</Button>
                    </Form>
                </Col>
            </Row>
        )
    }

}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        authData
    } = state;

    return {
        authData
    };
};


//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getLoginSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
