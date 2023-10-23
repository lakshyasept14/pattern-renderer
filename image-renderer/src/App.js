import './App.css';
import {useState} from 'react';
import dark1 from './Assets/dark1.PNG';
import dark2 from './Assets/dark2.PNG';
import dark3 from './Assets/dark3.PNG';

function App() {

  const [imgPosition,setImgPosition] = useState({coordinateX : x, coordinateY : y});
  return (
    <div style={{
      position: 'relative',
      top: imgPosition.coordinateY,
      left: imgPosition.coordinateX
    }}>
      <img src={dark1} className='image'/>
    </div>
  );
}

export default App;
