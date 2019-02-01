import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBooksSaga } from '../../actions/booksActions'

import {
  Form, Input, Tooltip, Icon, Button
} from 'antd';

const { TextArea } = Input

class CreateBooks extends Component {

  state = {
    book: {}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('ESTADO:',this.state.book)
    this.props.createBooksSaga(this.state.book)
  }
  handleChange = (e)=>{
    const {book} = this.state
    const field = e.target.name
    book[field] = e.target.value
    this.setState({book})
}
  render() {
    //const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>


        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              ID&nbsp;
                <Tooltip title="Ingresa el ID del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >

          <Input name="id" onChange={this.handleChange} />


        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              nombre&nbsp;
                <Tooltip title="Ingresa el nombre del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >

          <Input name="name" onChange={this.handleChange}/>
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              descripcion&nbsp;
                <Tooltip title="Ingresa la descripcion del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >

          <TextArea name="description" rows={4} onChange={this.handleChange}/>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Registrar</Button>
        </Form.Item>

      </Form>
    );
  }
}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
  const {
    booksData
  } = state;

  return {
    booksData
  };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    createBooksSaga
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBooks);
