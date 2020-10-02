/* This Component returns the format for the users shopping cart, containing the Cart-Items and the Total*/ 

import React from 'react'
import Items from './Cart-Details/Cart-Items'
import Total from './Cart-Details/Total'

export default function Cart({selected}) {
    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <Items selected={selected}/>
            <Total selected={selected}/>
        </section>
    )
}