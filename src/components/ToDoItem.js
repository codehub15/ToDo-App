import React from 'react'

export default function ToDoItem(props) {
    const data = props.item;

    return (
        // pass the props (update function) from the child to this child ==> updateItem={props.updateItem}
        <div className="todo-item" onClick={() => { props.updateItem(data.id) }} >
            <p> {data.text} </p>

            <div className="actions">
                <button className="btn">&#10004;</button>
            </div>
        </div>
    )
}
