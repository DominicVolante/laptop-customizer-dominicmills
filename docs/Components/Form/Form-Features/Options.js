/* This Component returns the potential option selections inside of each feature in the Form*/ 


import React from 'react'

export default function Options({featureHash, feature, options}){
    return (
        <fieldset className='feature' key={featureHash}>
          <legend className='feature__name'>
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      )
}