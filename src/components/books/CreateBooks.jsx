import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBooksSaga } from '../../actions/booksActions'
import * as jsPDF from 'jspdf'

import {
    Form, Input, Tooltip, Icon, Button
} from 'antd';

const { TextArea } = Input

class CreateBooks extends Component {

    state = {
        book: {}
    }

    printForm = () =>{
        //this works!!!
        const pdf = new jsPDF();
        pdf.text(10, 10, `You have to pay $`);
        // save the PDF document (downloadable)
        pdf.save();
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('ESTADO:',this.state.book)
        this.props.createBooksSaga(this.state.book)
        //this.printForm()
    }
    handleChange = (e)=>{
        console.log('datos nombre:',e.target.name)
        console.log('datos valor:',e.target.value)
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
              Titulo&nbsp;
                            <Tooltip title="Ingresa el Nombre del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >

                    <Input name="title" onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Autor&nbsp;
                            <Tooltip title="Ingresa el nombre del Autor del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >

                    <Input name="bookAuthor"  onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Editorial&nbsp;
                            <Tooltip title="Ingresa el nombre de la Editorial del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input name="editorial"  onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Edicion&nbsp;
                            <Tooltip title="Ingresa el numero de la Edicion del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input name="edition"  onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Año&nbsp;
                            <Tooltip title="Ingresa el año del libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input name="year"  onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Matricula-Estudiante&nbsp;
                            <Tooltip title="Ingresa la matricula de la carrera">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input name="studentId"  onChange={this.handleChange}/>
                </Form.Item>



                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Nombre&nbsp;
                            <Tooltip title="Ingresa el Nombre del estudiante">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input name="studentName"  onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Licenciatura&nbsp;
                            <Tooltip title="Ingresa el nombre de la licenciatura que esta cursando">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input name="studentCareer"  onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              Periodo&nbsp;
                            <Tooltip title="Ingresa el periodo en que se entrego el libro">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input name="period"  onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
              FechaDonacion&nbsp;
                            <Tooltip title="Ingresa el dia en el que se realizo la donacion">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                    )}
                >
                    <Input type="date" name="donationDate"  onChange={this.handleChange}/>
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
