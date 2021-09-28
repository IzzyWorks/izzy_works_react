import React from 'react';

//hooks
// import useLocalStorage from '../hooks/useLocalStorage';

//props from whitepaper from index.js;

// const renderLandingPage = (props) => {
//   console.log('trigger renderLandingPage ===>', props);
//   const [priviousPage, setPriviousPage] = useLocalStorage('previousPage', 0);
//   setPriviousPage(props.whitePaper.page);
// };

const LandingPage = () => {
  // renderLandingPage;

  // const handleClick = (e) => {
  //   console.log("the element clicked!",e.target);
  // };

  // const mouEnterHandler = (e) => {
  //   console.log("hello form mouse enter!",e.target);
  // }
  console.log('%cRendering Landing Page', 'color: purple; font-size: 16px');
  return (
    <div>
      <ul className='circle--list'>
        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <article className='zoom-out-siblings'>
              <button className='circle one'>
                <h3 className='circle--subtitle'>understand</h3>
              </button>
              <button className='circle two'>
                <h3 className='circle--subtitle'>observe</h3>
              </button>
              <button className='circle three'>
                <h3 className='circle--subtitle'>POV</h3>
              </button>
            </article>
          </ul>
        </li>

        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <article className='zoom-out-siblings'>
              <button className='circle four'>
                <h3 className='circle--subtitle'>ideate</h3>
              </button>
              <button className='circle five'>
                <h3 className='circle--subtitle'>prototype</h3>
              </button>
              <button className='circle six'>
                <h3 className='circle--subtitle'>test</h3>
              </button>
            </article>
          </ul>
        </li>

        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <article className='zoom-out-siblings'>
              <button className='circle seven'>
                <h3 className='circle--subtitle'>story telling</h3>
              </button>
              <button className='circle eight'>
                <h3 className='circle--subtitle'>piolt</h3>
              </button>
              <button className='circle nine'>
                <h3 className='circle--subtitle overflow'>busines model</h3>
              </button>
            </article>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
