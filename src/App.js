import './App.css';
import { todos } from "./todos.json";
import React, { Component } from 'react';
import TodoForm from './components/TodoForms';
console.log(todos);


class App extends Component {
  constructor(){
    super();
    this.state = {
     todos
    }
  }
  render(){
  const todos = this.state.todos.map((todo,i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
              <div className="card-header">
                <h3>{todo.title}</h3>
                  <spam className="badge bg-danger">
                    {todo.priarity}
                  </spam>
              </div>
              <div className="card-body">
                <p>{todo.descripcion}</p>
                <p><mark>{todo.responsible}</mark></p>
              </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
         <a href="" className="text-w hite">
         Task
          <spam className="badge rounded-pill bg-light text-dark ml-4">
          {this.state.todos.length}
          </spam>
         </a>
        </nav>

        <div className="container">
          <div  className="row mt-4">
            <div className="col-md-3">
            <TodoForm/>
            </div>
          { todos }
          </div>
        </div>

      </div>
    );
  }
}
export default App;
