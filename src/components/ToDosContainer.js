import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

// export default function ToDosContainer(props) {
// change this function to class because you need to store the data in the state
export default class ToDosContainer extends Component {
    // add constructor
    constructor(props) {
        // call the super method
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

        // call the method to add new todo item that user has input
        // this.props.addItem(this.state.userInput)
    }


    // add render ========================
    render() {
        // add this before the props
        const todos = this.props.item;

        // if there some items then go throug it
        const toDoItems = todos.map(el => {
            // pass the props (update function) from the child to this child ==> updateItem={props.updateItem}
            // receive props like update function from the parent
            return (<ToDoItem item={el} key={el.text} updateItem={this.props.updateItem} />)
        });


        // return ==========================
        return (
            <div className="todos-container" >

                <form className="todo-form" onSubmit={this.handleSubmit}>
                    <label className="input-item" for="user-input">
                        {/* grab the value from the input field (add value to empty the field after typing in) */}
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
