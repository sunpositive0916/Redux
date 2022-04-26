import { useContext, useEffect, useState } from 'react';
import ReduxContext from '../contexts/ReduxContext';

export default function useReduxState() {
    const store = useContext(ReduxContext);
    const [state, setState] = useState(store.getState());
  
    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        setState(store.getState());
      });
      return () => {
        unsubscribe();
      }
    },[store]); // store가 새롭게 바뀔 일은 없기 때문에 처음 한번만 실행이 된다. 디펜던시로 적합하다.
  
    return state;
  }
  