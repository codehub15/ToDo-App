import React, { Component } from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Help from '../views/Help';
import PageNotFound from '../views/PageNotFound';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // some hard coded todo items
      items: []
    }
  }


  // fetch the data from the local storage using the key
  componentDidMount() {
    let data = localStorage.getItem("todo-list");
    // data parsing
    let parsedData = JSON.parse(data);
    // let items = JSON.parse(data);

    // if this data is not empty than put 
    if (parsedData !== null) {
      this.setState({
        // items: items
        // items // when the key and value are the same, write the name only once
        items: parsedData
      })
    }

  }


  // add new todo item to the array
  addItem = (newItem) => {
    // create new item
    let item = { id: this.state.items.length, text: newItem, done: false };

    // add item to the state
    this.setState({
      // first make a copy of array and then add new item to it
      items: [...this.state.items, item]
    }, () => {
      // sync code need to be in callback func (because setState is async)
      // store data
      localStorage.setItem("todo-list", JSON.stringify(this.state.items));
    })
  }


  // update / toggle status of done and todo
  updateItem = (id) => {
    let newState = this.state.items.map((item) => {
      // check if the id from the item is the same as the id coming from the 
      if (item.id === id) {
        // reversing done
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    })

    // update the state
    this.setState({
      items: newState
    }, () => {
      // store data
      localStorage.setItem("todo-list", JSON.stringify(this.state.items));
    })
  }


  // render ==============================
  render() {
    console.log("items:", this.state.items.length);

    // get / filter only not done (false) items
    // add  this.state.items &&  otherwise there is error local storage
    const toDos = this.state.items && this.state.items.filter(el => !el.done);
    // filter only done (true) items
    const toDones = this.state.items && this.state.items.filter(el => el.done);

    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />

          <Switch>
            <Route exact path="/">
              {/* pass the props (update function) to the child (and from this child to the next) */}
              <ToDosContainer item={toDos} updateItem={this.updateItem} addItem={this.addItem} />
              <ToDonesContainer item={toDones} updateItem={this.updateItem} />
            </Route>

            <Route exact path="/help">
              <Help />
            </Route>

            <Route>
              <PageNotFound />
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}
