import React from 'react'
import ToDoneItem from './ToDoneItem';

export default function ToDonesContainer(props) {
    const todones = props.item;

    // map through the items array and return list component
    const toDonesItems = todones.map(el => {
        return (
            // receive props like update function from the parent
            <ToDoneItem item={el} key={el.text} updateItem={props.updateItem} />
        )
    });

    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDonesItems}
        </div>
    )
}
