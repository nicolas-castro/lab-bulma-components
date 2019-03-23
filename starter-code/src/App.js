import React, { Component } from "react";
import NavBar from "./NavBar";
import FormField from "./FormField"

class App extends Component {

  render () { 
    return (
      <div className="App">
      <NavBar />
      <FormField label="Name" type="text" placeholder="Alex Smith" name="Name"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" name="Email" />
      </div>
    )
  }
}

export default App; 