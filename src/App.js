import React from "react";
import './App.css';
export default App;


function App() {

  function sayHello() {
    alert('Hello!');
  }

  return (
    <div className="main row">
      <div className="row">
        <div className="col-md-12">
          <h2>Welcome to the shop</h2>
          <form>
            <div className="form-group">
              <h1 style={{ color: "blue" }}>Login</h1>
              <input type="text" id="login" className="form-control" placeholder="Username or Email Id" /><br />
              <input type="text" id="password" className="form-control" name="login" placeholder="Password" /><br />
              <button onClick={sayHello} className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
