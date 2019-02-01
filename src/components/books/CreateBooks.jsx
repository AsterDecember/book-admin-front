import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBooksSaga } from '../../actions/booksActions'

import {
  Form, Input, Tooltip, Icon, Button
} from 'antd';

const { TextArea } = Input

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.createBooksSaga(values)
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }


  render() {
    const { getFieldDecorator } = this.props.form;

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
          {getFieldDecorator('id', {
            rules: [{ required: true, message: 'Porfavor ingresa el ID del libro!', whitespace: true }],
          })(
            <Input />
          )}
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
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Porfavor ingresa el nombre del libro!', whitespace: true }],
          })(
            <Input />
          )}
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
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Porfavor ingresa la descripcion del libro!', whitespace: true }],
          })(
            <TextArea rows={4} />
          )}
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

connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
//ReactDOM.render(<WrappedRegistrationForm />, mountNode);

//const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export default function CreateBooks() {
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  return (
    <div>
      <WrappedRegistrationForm />
    </div>
  )
}
