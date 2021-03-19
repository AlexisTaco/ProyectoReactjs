import React, {Component} from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      responsible:'',
      descripcion:'',
      priarity:''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    const {value, name} = e.target;
    this.setState({
      [name]:value
    })
    console.log(this.state);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    console.log("sending the date");
  }

  render(){
    return(
      <div className="card" onSubmit={this.handleSubmit}>
        <form className="card-body" onSubmit="">
          <div className="form-group">
            <input
            type="text"
            name="title"
            onChange={this.handleInput}
            className="form-control"
            placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
            type="text"
            name="responsible"
            className="form-control"
            placeholder="Responsible"
            onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
            type="text"
            name="descripcion"
            className="form-control"
            placeholder="Descripcion"
            onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
          <select name="priarity" onChange={this.handleInput}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
          </div>
          <button onClick="handleSubmit()">
            Send
          </button>
        </form>
      </div>
    )
  }
}
export default TodoForm;
