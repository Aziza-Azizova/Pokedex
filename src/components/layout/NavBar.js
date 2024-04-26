import React, { Component } from 'react'
import SearchBar from '../pokemon/SearchBar'


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light bg-gradient fixed-top">
          <div className="col-6 fw-bold paddingH">
            <a href="https://pokeapi.co/" style={{color: "#c62828"}}>P&emsp;O&emsp;K&emsp;E&emsp;D&emsp;E&emsp;X</a>
          </div>
          <SearchBar />
          {/* <form class="col-6 d-flex paddingS">
            <input class="inputMedia form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btnMedia" type="submit" style={{backgroundColor: "#c62828", color: "#fff"}}>Search</button>
          </form> */}
        </nav>
      </div>
    )
  }
}
