import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState(
      {
        [name]: value
      },
      () => this.props.onFilter(
        name === 'filterName' ? value : this.state.filterName,
        name === 'filterStatus' ? value : this.state.filterStatus
      )
    )
  }
  render() {
    const {tasks ,updateStatus ,removeTasks ,onUpdateTasks} = this.props;
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="filterName"
                    value={this.state.filterName}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <select 
                    className="form-control"
                    name="filterStatus"
                    value={this.state.filterStatus}
                    onChange={this.onChange}
                  >
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td />
              </tr>
              {
                tasks.map((task,index) => {
                  return <TaskItem 
                            key={index} 
                            tasks={task} 
                            index={index} 
                            updateStatus={updateStatus} 
                            removeTasks={removeTasks}
                            onUpdateTasks={onUpdateTasks}
                          />
                })
              }
            </tbody>          
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
