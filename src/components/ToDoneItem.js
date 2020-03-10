import React from 'react'

export default function ToDoneItem(props) {
    const data = props.item;

    return (
        // pass the props (update function) from the child to this child ==> updateItem={props.updateItem}
        <div className="todones-item" onClick={() => { props.updateItem(data.id) }} >
            <p> {data.text} </p>

            <div className="actions">
                <button className="btn">&#8635;</button>
            </div>
        </div>
    )
}
