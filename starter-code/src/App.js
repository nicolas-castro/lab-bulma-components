import React, { Component } from "react";
import NavBar from "./NavBar";
import FormField from "./FormField"

class App extends Component {

  render () { 
    return (
      <div className="App">
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    )
  }
}

export default App; 