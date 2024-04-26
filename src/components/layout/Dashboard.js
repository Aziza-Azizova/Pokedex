import React, { Component } from 'react'
import PokemonList from '../pokemon/PokemonList'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="mt-5 pt-3 row">
        <div className="col">
            <PokemonList />
        </div>
      </div>
    )
  }
}
