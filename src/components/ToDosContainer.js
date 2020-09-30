import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }
    }

    // declare function to update data with new user input on change event
    handleNewTodoItem = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    // declare function to stop the page from the refreshing and to add todo item to the array
    handleSubmit = (e) => {
        e.preventDefault();
        // check if user input is not empty, then run the function 
        if (this.state.userInput.trim() !== "") {
            // call the function to ad new item to array todo list
            this.props.addItem(this.state.userInput.trim())
            // empty the input again
            this.setState({
                userInput: ""
            })
        }
    }

    render() {
        const todos = this.props.item;

        const toDoItems = todos.map(el => {
            return (<ToDoItem item={el} key={el.text} updateItem={this.props.updateItem} />)
        });

        return (
            <div className="todos-container">
                <form className="todo-form" onSubmit={this.handleSubmit}>
                    <label className="input-item" for="user-input">
                        <input type="text" name="todo" id="user-input" value={this.state.userInput} onChange={this.handleNewTodoItem} />
                    </label>
                    <input type="submit" className="btn" value="ADD" />
                </form>
                <div className="todos">
                    <h3>To Do</h3>
                    {toDoItems}
                </div>
            </div>
        )
    }
}
