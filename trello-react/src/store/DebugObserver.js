import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    const modifedNodes = Array.from(snapshot.getNodes_UNSTABLE({ isModified: true }));
    console.log('[RECOIL]: The following atoms were modified-----------------------');
    modifedNodes.map((node) => {
      console.log(node.key, snapshot.getLoadable(node));
      return null;
    });
    console.log('-------------------------------------------------------------------');
  }, [snapshot]);

  return null;
}

export default DebugObserver;
