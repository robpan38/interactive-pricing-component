import './App.css';
import { useState } from 'react';
import useMediaQuery from './useMediaQuery';
import Title from './components/Title';
import Slider from './components/Slider';

function App() {
  const AppData = [
    {
      views: '10K',
      monthly: '$8.00',
      yearly: '$6.00'
    },
    {
      views: '50K',
      monthly: '$12.00',
      yearly: '$9.00'
    },
    {
      views: '100K',
      monthly: '$16.00',
      yearly: '$12.00'
    },
    {
      views: '500K',
      monthly: '$24.00',
      yearly: '$18.00'
    },
    {
      views: '1M',
      monthly: '$36.00',
      yearly: '$27.00'
    }
  ]

  const [toggle, setToggle] = useState(false);
  
  const isScreenSmall = useMediaQuery("(max-width: 1250px)");

  const handleToggleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="root2">
      <Title/>
      <Slider appData={AppData} handleToggle={handleToggleClick} toggle={toggle} isScreenSmall={isScreenSmall}></Slider>
    </div>
  );
}

export default App;
