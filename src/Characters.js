import App from './App';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const StyledCharacter = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 15px;
align-items: center;
width: 40%; 
background-color: ${props => props.theme.colorOne};
margin-left: 30%;
border-radius: 8px;
h2 {
    color: #f5f5f5;
}
h3, li {
    
    color: #ad7d37;
}
li {
    list-style-type: none;
    margin-right: 35px;
}


`

export default function Characters(props) {
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };



    return (
        <StyledCharacter className="characterContainer">

            <h2>{props.data.name}</h2>
            <button onClick={ToggleClass}>{isActive ? "Hide Character" : "Show Character"}</button>
            <div className={isActive ? "active" : "inActive"}>

                <h3>Character Details</h3>
                <ul>
                    <li>Birth Year: {props.data.birth_year}</li>
                    <li>Homeworld</li>
                    {/* <img src={props.data.homeworld}></img> */}
                    <li>Gender: {props.data.gender.toUpperCase()}</li>
                    <li>Height: {props.data.height}</li>
                    <li>Mass: {props.data.mass}</li>
                    <li>Eye-Color: {props.data.eye_color.toUpperCase()}</li>
                    <li>Hair-Color: {props.data.hair_color.toUpperCase()}</li>
                    <li>Skin-Color: {props.data.skin_color.toUpperCase()}</li>
                </ul>
                <h3>Films</h3>
                <ul>
                    {props.data.films.map(film => {
                        return <li>{film}</li>
                    })}
                </ul>

            </div>

        </StyledCharacter>
    )
}