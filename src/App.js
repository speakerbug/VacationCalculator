import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      earned: 0,
      available: 0,
      rate: 0,
      total: 0,
      used: 0,
      unaccrued: 0,
      remaining: 0
    };
  }
  calculate = () => {
    let total = this.state.rate*26;
    let used = this.state.earned-this.state.available;
    let unaccrued = total-this.state.available-used;
    let remaining = total-used;
    this.setState({total: total, used: used, unaccrued: unaccrued, remaining: remaining});
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    // Set the value and then calculate new vacation day values as a callback function
    this.setState({[nam]: val}, this.calculate);
  }
  render() {
    return (
    <div className="container">
      <div className="row">
      <div className="col-4">
      <form className="form-horizontal">
  <div className="form-group">
    <label className="control-label col-sm-7">Vacation Earned:</label>
    <div className="col-sm-5">
      <input type="number" name="earned" onChange={this.myChangeHandler} className="form-control" />
    </div>
  </div>

  <div className="form-group">
    <label className="control-label col-sm-7">Vacation Available:</label>
    <div className="col-sm-5">
      <input type="number" name="available" onChange={this.myChangeHandler} className="form-control" />
    </div>
  </div>

  <div className="form-group">
    <label className="control-label col-sm-7">Vacation Accrual Rate:</label>
    <div className="col-sm-5">
      <input type="number" name="rate" onChange={this.myChangeHandler} className="form-control" />
    </div>
  </div>
      </form>
      </div>
  <div className="col-8">

  <h2>Vacation Breakdown</h2>         
  <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Hours</th>
        <th>Days</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Vacation</td>
        <td>{(this.state.total).toFixed(2)}</td>
        <td>{(this.state.total/8).toFixed(0)}</td>
      </tr>
      <tr>
        <td>Vacation Used</td>
        <td>{(this.state.used).toFixed(2)}</td>
        <td>{(this.state.used/8).toFixed(0)}</td>
      </tr>
      <tr>
        <td>Vacation Unaccrued</td>
        <td>{(this.state.unaccrued).toFixed(2)}</td>
        <td>{(this.state.unaccrued/8).toFixed(0)}</td>
      </tr>
      <tr>
        <td>Remaining Vacation</td>
        <td>{(this.state.remaining).toFixed(2)}</td>
        <td>{(this.state.remaining/8).toFixed(0)}</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
    </div>
    );
}
}

export default App;
