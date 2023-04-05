import './style.css'

import Title from './Components/Header/Title';
import RouteComp from './Utility/Routes'
import Nav from './Components/Header/Nav'
function App() {
  return (
    <div className='Bodywrap'>
    <Title/>
    <Nav/>    
    <RouteComp/>

    </div>
  );
}

export default App;