import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../../openAccount';
import Pricing from './Pricing';


function Homepage() {
  return ( 
  <div className='overflow-x-hidden'>
 
    <Hero/>
   <Awards/>
   <Stats/>
   <Pricing/>
   <Education/>
   <OpenAccount/>
   </div>
   

   


   
   );
}

export default Homepage;