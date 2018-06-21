import React, { Component } from 'react';
import logo from './myLogoFilled2.png';
import './App.css';

import CardList from '../Card/CardList';
import { courses } from '../courses';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary';
// Requires state SearchBox communicate with CardList use Class

class App extends Component {
  //declare state can change as courses object and searchfield
  constructor (){
    super()
    this.state = {
      courses:[],
      searchfield: '',
      searchoption:''
    }
  }
  // function from lifecycle runs after render 
  componentDidMount(){
    this.setState({courses: courses})
  }
  // created function to change state  and filters courses object
  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
    
  }
  onOptionChange = (event) =>{
  
    this.setState({searchoption: event.target.value})
    
  }
  // to get access to object to communicate other components 
  render() {
    const filteredCourses = this.state.courses.filter(course =>{
      if(this.state.searchoption === "All"){
        return course.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      } 
     return course.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) && 
        course.area.toLowerCase().includes(this.state.searchoption.toLowerCase())
    })

    return (
      // create a component for header searchBox activates function
      // pass filtered object 
      <div className="App tc">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Website </h1>
          <p> "Daniel Castro - Software Developer" </p>
        </header>
        <p id='textalone'> The following are some of the courses I have taken: </p>
        <SearchBox searchChange={this.onSearchChange} optionChange={this.onOptionChange} /> 
        <Scroll>
          <ErrorBoundary>
            <CardList courses={filteredCourses} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
