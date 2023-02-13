import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from '../../Services/slice/data';
import { getData } from '../../Services/WebSocet';
import Loading from '../Loading/Loading';
import Ticker from '../Ticker/Ticker';
import Error from '../Error/Erorr';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const { data1, connectionLoading, connectionError, connectionSuccess, dataSuccess } = useSelector(dataSelector);

  useEffect(() => {
    dispatch(getData('connect'))
    return () => {
      dispatch(getData('disconnect'))
    }
  }, [])

  return (
    <div className="App">
      {connectionLoading ? <Loading /> : <Ticker />}
    </div>
  );
}

export default App;
