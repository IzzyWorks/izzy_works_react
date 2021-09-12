import React, { useEffect, useState } from 'react';

import {TransitionGroup,CSSTransition}  from 'react-transition-group'; 

function TransgroupPoc(props) {

    const [theState,setTheState] = useState([]);
    const [showHide,setShowHide] = useState(false);
    

    const animateOnClick = () => {
        console.log("Clicked ======>");
        let theStateDeep = [...theState]; //Deep Copy
        theStateDeep.push({title: "I am animating...!", id: "Id-"+Math.random()});
        console.log("theStateDeep ===>",theStateDeep);
        setTheState(theStateDeep);
        setShowHide(true);
    }

    const MyInjectedComponent = (props) => {
        console.log("Injected Component ===>",props);
        let myDom = props.content.map((item,index)=>{
            return (
                <CSSTransition key={item.id} in={true} timeout={3000} classNames="myTitle">
                    <div >{item.title}</div> 
                </CSSTransition>
            );
        });
        console.log("myDom ===>",myDom);
        return myDom;
    }

  return (
    <React.Fragment>
        {console.log("Re-Render====>")}
      <button onClick={animateOnClick}>Add</button>
        <TransitionGroup className="myTitleGroup">
            <MyInjectedComponent content={theState}/>
        </TransitionGroup>
    </React.Fragment>
  );
}

export default TransgroupPoc;
