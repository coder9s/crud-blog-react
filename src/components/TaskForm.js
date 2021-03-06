import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }
  }
  componentWillMount(){
    if(this.props.Editing){
      this.setState({
        id: this.props.Editing.id,
        name: this.props.Editing.name,
        status: this.props.Editing.status
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.Editing) {
      this.setState({
        id: nextProps.Editing.id,
        name: nextProps.Editing.name,
        status: nextProps.Editing.status
      })
    }else if(nextProps && nextProps.Editing === null){
      this.setState({
        id: '',
        name: '',
        status: true
      })
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addForm(this.state);
    this.props.onCloseForm();
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.state.id ? "Sua Cong Viec" : "Thêm Công Việc"}
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input 
                type="text" 
                className="form-control" 
                name="name" 
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select 
              className="form-control" 
              required="required"
              name="status" 
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>&nbsp;
              <button type="button" className="btn btn-danger">
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
