import React from 'react';

function LandingHero() {
  return (
    <div className='landing'>
      <ul className='circle--list'>
        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <li>
              <div className='circle one'></div>
              <h3 className='circle--subtitle'>understand</h3>
            </li>
            <li>
              <div className='circle two'></div>
              <h3 className='circle--subtitle'>observe</h3>
            </li>
            <li>
              <div className='circle three'></div>
              <h3 className='circle--subtitle'>POV</h3>
            </li>
          </ul>
        </li>

        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <li>
              <div className='circle four'></div>
              <h3 className='circle--subtitle'>ideate</h3>
            </li>
            <li>
              <div className='circle five'></div>
              <h3 className='circle--subtitle'>prototype</h3>
            </li>
            <li>
              <div className='circle six'></div>
              <h3 className='circle--subtitle'>test</h3>
            </li>
          </ul>
        </li>

        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <li>
              <div className='circle seven'></div>
              <h3 className='circle--subtitle'>story telling</h3>
            </li>
            <li>
              <div className='circle eight'></div>
              <h3 className='circle--subtitle'>piolt</h3>
            </li>
            <li>
              <div className='circle nine'></div>
              <h3 className='circle--subtitle'>busines model</h3>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default LandingHero;
