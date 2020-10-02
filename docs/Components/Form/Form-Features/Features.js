/* This Component returns the list of features with selection options inside to the customization Form*/ 

import React from 'react'; 
import slugify from 'slugify';
import Options from './Options';
import USCurrencyFormat from '../../currency'



export default function Features({selected, features, updateFeature}){


      return Object.keys(features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === selected[feature].name}
                onChange={() => updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        })
        return(
            <Options featureHash={featureHash} feature={feature} options={options}/>
        );
      })
}