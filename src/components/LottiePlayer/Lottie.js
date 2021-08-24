import Lottie from 'react-lottie-player';
import React, { useState, memo, useRef, useEffect } from 'react';

// const boxStyle = {
//   width: 200,
//   maxWidth: '100%',
//   margin: 30,
//   padding: 30,
//   borderRadius: 7,
//   display: 'flex',
//   flexDirection: 'column',
// };

const LottiePlayer = memo((props) => {
  const [segmentFrom, setSegmentFrom] = useState(0);
  const [segmentTo, setSegmentTo] = useState(70);
  const [segmentsEnabled, setSegmentsEnabled] = useState(false);
  const [play, setPlay] = useState(true);
  const [loop, setLoop] = useState(false);
  const [loopTimes, setLoopTimes] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState(1);
  const segments = [props.frames.startFrame, props.frames.setFrames];

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

  console.log('In Lottie ===> Logo', props.frames);

  return (
    <Lottie
      loop={loop}
      speed={speed}
      play={play}
      animationData={props.animationData}
      direction={direction}
      segments={segments}
      //   style={{ width: 150, height: 150, marginBottom: 10, alignSelf: 'center' }}
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

export default LottiePlayer;
