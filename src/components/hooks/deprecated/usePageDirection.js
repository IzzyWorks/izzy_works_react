import { count, prevCount } from './usePageCount';

function usePageDirection() {
  const [pageDirection, setPageDirection] = useState(1);
  if (count > prevCount) {
    setPageDirection === 1;
  } else {
    setPageDirection === -1;
  }

  return pageDirection;
}

export default usePageDirection;

// check last frame state, then pass in the new lastframe and compare which is larger and set direction based on this logic.
