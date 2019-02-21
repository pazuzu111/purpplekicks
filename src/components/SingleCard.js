import React, { Component } from 'react';
import { connect } from 'react-redux';


const SingleCard = props => {
    const name = props.location.state.data.name;
    const img = props.location.state.data.imageUrlHiRes;
    const hp = props.location.state.data.hp;
    const evolvesFrom = props.location.state.data.evolvesFrom;
    const rarity = props.location.state.data.rarity;
    let attacks;
    let weaknesses;

    if(props.location.state.data.hasOwnProperty('attacks')) 
    {
      attacks = props.location.state.data.attacks.map((attack, index) => {
                  return (
                    <li key={index}>{ attack.name }</li>
                  )
                });
    }

    if(props.location.state.data.hasOwnProperty('weaknesses')) 
    {
      weaknesses = props.location.state.data.weaknesses.map((weakness, index) => {
                      return (
                        <li key={index}>{ weakness.type }</li>
                      )
                  });
    }
    
    return (
      <div className="selected-wrapper">
        <div className="img-wrapper">
          <img src={img} alt="pokemon"/>
        </div>
        
        <div className="info-wrapper">
          <h1> { name ? name : '' } </h1>
          {
            evolvesFrom ? 
            (
              <p>This Pokemon evolves from {evolvesFrom}</p>
            ) : ''
          }
          {
            hp ? 
            (
              <p>Hit Points - {hp}</p>
            ) : ''
          }
          {
            rarity ? 
            ( 
              <p>Rarity - {rarity}</p> 
            ) : <p></p>
          }
          {
            attacks ? 
            (
              <div>
                <h2>Attacks</h2>
                  <ul>
                    {attacks}
                  </ul>
              </div>
            ) : ''
          }
          {
            weaknesses ? 
            (
              <div>
                <h2>Weaknesses</h2>
                <ul>
                  {weaknesses}
                </ul>
              </div>
            ) : ''
          }
        </div>
      </div>
    )
};

export default SingleCard;