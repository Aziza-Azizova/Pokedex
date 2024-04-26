import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import SearchBar from '../pokemon/SearchBar';


export default class PokemonList extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0',
        pokemon: null
    };


    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <nav className="navbar navbar-expand-md navbar-light bg-light bg-gradient fixed-top justify-content-center">
                        <div className="fw-bold paddingH">
                            <a href="https://pokeapi.co/" className="text-center" style={{color: "#c62828"}}>P&emsp;O&emsp;K&emsp;E&emsp;D&emsp;E&emsp;X</a>
                        </div>
                    </nav>
                </div>
                {this.state.pokemon ? (
                    <div className="row">
                        <SearchBar />
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard key = {pokemon.name} name = {pokemon.name} url = {pokemon.url} />
                        ))}
                    </div>
                ) : (
                    <h1 className="badge p-3 " style={{backgroundColor: "#ef5350", color: "white"}}>Loading Pokemon ...</h1>
                )}
            </React.Fragment>
        )
    }
}

