import React, { Component } from 'react'
import styled from "styled-components";
import spinner from "../pokemon/spinner.gif";
import { Link } from 'react-router-dom';

const colors = ["B1C12E","4F3A2D","755EDF","FCBC17","F4B1F4","823551D","E73B0C","A3B3F7","6060B2", "74C236","D3B357","A3E7FD","C8C4BC","934594","ED4882","B9A156","B5B5C3","3295F6"]; 


const Sprite = styled.img`
    width: 14rem;
    height: 14rem;
    display: none;
    @media (min-width: 576px) and (max-width: 768px) {
        width: 7rem;
        height: 7rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 7rem;
        height: 7rem;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 12rem;
        height: 12rem;
    }
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none
    
`

const StyledLink = styled(Link)`
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #ef5350;
    }
`

export default class PokemonCard extends Component {

    state = {
        name: "",
        imageUrl: "",
        pokemonIndex: "",
        imageLoading: true,
        toManyRequests: false
    }

    componentDidMount(){
        const {name, url}  = this.props;
        const pokemonIndex = url.split("/")[url.split("/").length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`;

        this.setState({
            name,
            imageUrl,
            pokemonIndex
        })

    }

    render() {
        return (
        <div className="col-md-4 col-sm-6 mb-5">
            <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                <Card className="card" style={{backgroundColor: `#${colors[Math.floor(Math.random() * colors.length)]}`}}>
                    <div className="d-flex flex-row">
                        <div>
                        <h3 className="badge bg-light text-dark opacity-75 fs-5 text-muted mb-0 mt-4 ms-4">#{this.state.pokemonIndex}</h3>
                        <h3 className="fw-bolder mb-5 ps-4 pt-2 text-light pokeName">{this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(" ")}</h3>
                        </div>
                        
                        {this.state.imageLoading ? (
                            <img src={spinner} style={{width: "5em", height: "5em"}} className="card-img-top rounded mx-auto d-block my-5" alt="Spinner" />
                        ) : null}

                        <Sprite className="ms-auto m-3 p-3" onLoad={() => this.setState({imageLoading: false})} onError={() => this.setState({toManyRequests: true})} src={this.state.imageUrl} style= {this.state.toManyRequests ? {display: "none"} : this.state.imageLoading ? null : {display: "block"}} />
                    </div>

                    {this.state.toManyRequests ? (
                        <h6 className="mx-auto ">
                            <span className="badge bg-danger rounded-pill my-3 py-3 px-5">Too Many Requests</span>
                        </h6>
                    ) : null}
                </Card>
            </StyledLink>
        </div>
        )
    }
}
