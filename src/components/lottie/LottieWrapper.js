import Lottie from 'react-lottie-player';
import React, { useState, memo, useRef, useEffect } from 'react';

const LottieWrapper = memo((props) => {
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

  console.log('In Lottie ===>', props);

  return (
    <Lottie
      loop={props.animationData.loop}
      speed={props.animationData.speed}
      play={props.animationData.play}
      animationData={props.animation}
      direction={props.animationData.direction}
      segments={props.animationData.segments}
      onComplete={() => addLog('complete')}
      onLoopComplete={() => addLog('loopComplete')}
      onEnterFrame={() => {
        /* addLog('enterFrame') */
      }}
      onSegmentStart={() => addLog('segmentStart')}
      onLoad={() => addLog('load')}
    />
  );
});

export default LottieWrapper;
