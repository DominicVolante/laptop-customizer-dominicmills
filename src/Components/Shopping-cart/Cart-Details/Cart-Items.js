/* This Component returns the format for the selected items within the users shopping cart*/ 

import React from 'react'
import USCurrencyFormat from '../../currency'

export default function Cart({selected}) {

      
    return  Object.keys(selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = selected[feature];

    return (
        <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
        </div>
        </div>
    );
    });
}