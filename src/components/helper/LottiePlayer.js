import Lottie from 'react-lottie-player';
import React, { useState, memo, useRef, useEffect } from 'react';

const LottiePlayer = memo((props) => {
  const [log, setLog] = useState([]);
  const addLog = (v) => setLog((l) => [v, ...l]);

  function handleLoopTimesChange(e) {
    const { value } = e.target;
    setLoopTimes(value);
    const n = parseInt(value, 10);
    if (!Number.isInteger(n)) return;
    setLoop(n);
  }

  useEffect(() => {});

  function getLoopVal() {
    if (loop === true) return '';
    if (loop === false) return 0;
    return loopTimes;
  }
  //props from ====>
  //<Logo animationData={...} /> from NavBar.js;

  console.log('%cRunning Lottie Player ===>', 'color: red; font-size: 16px');
  console.log('Lottie Player segments ===>', props.animationData.segments);
  console.log('Lottie Player direction ===>', props.animationData.direction);

  return (
    <Lottie
      loop={props.animationData.loop}
      // speed={props.animationData.speed}
      speed={0.5}
      play={props.animationData.play}
      animationData={props.animation}
      segments={props.animationData.segments}
      direction={1}
      onComplete={() => addLog('complete')}
      onLoopComplete={() => addLog('loopComplete')}
      onEnterFrame={() => {
        /* addLog('enterFrame') */
      }}
      style={{
        width: props.animationData.width ? props.animationData.width : '100%',
        height: props.animationData.height
          ? props.animationData.height
          : 'auto',
      }}
      onSegmentStart={() => addLog('segmentStart')}
      onLoad={() => addLog('load')}
    />
  );
});

export default LottiePlayer;
