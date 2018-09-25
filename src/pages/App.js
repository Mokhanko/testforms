import React, { Component } from 'react';
import './app.css'

const ParseUser = ({ name, lastname, age, salary }) => {
  return (
    <tr className="info">
      <td className="danger">{name}</td>
      <td className="danger">{lastname}</td>
      <td className="danger">{age}</td>
      <td className="danger">{salary}</td>
    </tr>
  );
}

// const Form = (props) =>{
//   const {children} = props;
//   return (
//     <div className="container">
//       <div style={{display: 'block', margin: '0 auto', width:400}}>
//       {children}
//       </div>
//     </div>
//   )
// }

class App extends Component {
  state = {
    users:[
      {
        name:"Dima",
        lastname:"Mokhanko",
        age:32,
        salary:2000
      },
      {
        name:"Pavlo",
        lastname:"Petrycho",
        age:55,
        salary:200
      },
      {
        name:"Petro",
        lastname:"Panchoxa",
        age:66,
        salary:5000
      }
    ],
    name: '',
    lastname: '',
    password: '',
    repassword: '',
    age: 0,
    salary: 0
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});
  onSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    this.setState({
      name: '',
      lastname: '',
      password: '',
      repassword: ''
      });
  }
  render() {
    return (
      // <Form>
      //   <form onSubmit={this.onSubmit}>
      //     <div className="form-group row">
      //       <label className="col-sm-12 col-form-label">Name</label>
      //       <div className="col-sm-12">
      //         <input type="text" className="form-control" id="inputName" placeholder="Name"  value={this.state.name} name="name" onChange={this.onChange}/>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-12 col-form-label">Last Name</label>
      //       <div className="col-sm-12">
      //         <input type="text" className="form-control" id="inputLatName" placeholder="Last Name" value={this.state.lastname} name="lastname"onChange={this.onChange}/>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-12 col-form-label">Password</label>
      //       <div className="col-sm-12">
      //         <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} name="password" onChange={this.onChange}/>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <label className="col-sm-12 col-form-label">RePassword</label>
      //       <div className="col-sm-12">
      //         <input type="password" className="form-control" id="inputRePassword" placeholder="Password" value={this.state.repassword} name="repassword" onChange={this.onChange}/>
      //       </div>
      //     </div>
      //     <div className="form-group row">
      //       <div className="col-sm-12">
      //         <button type="submit" className="btn btn-primary btn-lg btn-block" value="Submit">Sign in</button>
      //       </div>
      //     </div>
      //   </form>
      // </Form>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 table-responsive">
            <table className="table">
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Salary</th>
                  </tr>
              </thead>
              <tbody>
                <tr className="info">
                  <td className="danger"><input type="text" onChange={(e) => this.setState({name: e.target.value})}/></td>
                  <td className="danger"><input type="text" onChange={(e) => this.setState({lastname: e.target.value})}/></td>
                  <td className="danger"><input type="number" onChange={(e) => this.setState({age: e.target.value})}/></td>
                  <td className="danger"><input type="number" onChange={(e) => this.setState({salary: e.target.value})}/></td>
                </tr>
                {this.state.users.filter(el => el.age > this.state.age).filter(el => el.salary > this.state.salary)
                                  .filter(el => el.name.toLocaleLowerCase().indexOf(this.state.name.toLowerCase())!=-1)
                                  .filter(el => el.lastname.toLocaleLowerCase().indexOf(this.state.lastname.toLowerCase())!=-1).map((user, i)=> (
                                  <ParseUser key={i} {...user} />
                ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <div className=""> 
      //   <p>User Registration</p>
      //   <form onSubmit={this.onSubmit}>
      //     <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.onChange}/><br/>  
      //     <input type="text" value={this.state.lastname} name="lastname"onChange={this.onChange}/><br/>
      //     <input type="text" value={this.state.password} name="password" onChange={this.onChange}/><br/>
      //     <input type="submit" value="Submit"/>
      //   </form>
      // </div>