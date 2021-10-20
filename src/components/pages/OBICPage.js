import React from 'react';

//hooks
// import useLocalStorage from '../hooks/useLocalStorage';

//components
import Title from '../interface/whitePaper/Title';
import Synopsis from '../interface/whitePaper/Synopsis';
import Details from '../interface/whitePaper/details/DetailsCard';

function OBICPage(props) {
  // console.log('%cRendering OBIC Page', 'color: darkblue; font-size: 16px');
  // renderOBICPage;
  const whitePaper = props.whitePaper;
  return (
    <article
      key={whitePaper.id}
      className={`article__wrapper ${whitePaper.style}`}
    >
      <Title articleTitle={whitePaper.id} />
      <Synopsis articleSynopsis={whitePaper.synopsis} />
      <Details articleDetails={whitePaper.details} />
    </article>
  );
}
// const renderOBICPage = () => {
//   const [priviousPage, setPriviousPage] = useLocalStorage('previousPage', 0);
//   setPriviousPage(props.whitePaper.page);
// };

export default OBICPage;
