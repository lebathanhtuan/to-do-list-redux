import React, { Component } from 'react';
import './../style.css';
import ListItem from './ListItem';
import { connect } from "react-redux";
import * as actions from "./../actions/index"

class ListToDo extends Component {
    render() {
        var showList = this.props.listToDo.map((list, index) => {
            return (
                <ListItem 
                    key={index} 
                    indexItem={index} 
                    listItem={list.name} 
                />
            )
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>To-do</th>
                        <th className="text-right action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showList}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        listToDo: state.listToDo
    }
};

export default connect(mapStateToProps, null)(ListToDo);
