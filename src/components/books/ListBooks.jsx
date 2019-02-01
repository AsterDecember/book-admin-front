import React, { Component } from 'react'
import { Table, Divider, Empty, Button } from 'antd';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBooksSaga } from '../../actions/booksActions'
import {Link} from 'react-router-dom'
const columns = [{
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    render: text => <a href="javascript:;">{text}</a>,
},
{
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
},
{
    title: 'Descripcion',
    dataIndex: 'description',
    key: 'description',
}, {
    title: 'Fecha',
    key: 'createdAt',
    dataIndex: 'createdAt',
}, {
    title: 'Accion',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Update</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
        </span>
    ),
}];
class ListBooks extends Component {
    componentDidMount() {
        this.props.getBooksSaga()
    }
    render() {
        const { books } = this.props.booksData.books.length > 0 ? this.props.booksData : []
        return (
            <div style={{ margin: "2rem" }}>
                <Link to="/newBooks"><Button type="primary" icon="plus" >Nuevo libro</Button></Link>
                <div style={{margin: "1rem"}}>
                    {this.props.booksData.books ? <Table columns={columns} dataSource={books} /> : <Empty />}
                </div>
            </div>
        )
    }
}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        authData,
        booksData
    } = state;

    return {
        authData,
        booksData
    };
};


//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getBooksSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks);
