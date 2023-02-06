import './App.css';
import { Banner } from './components/Banner';
import { Menu } from './components/menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WhoAmI } from './components/whoami';
import { Tecnologies } from './components/tecnologies';

function App() {
  return (
    <div className="App bg-default">
      {/* <Menu/> */}
      <Banner />
      <div className='mt-20'>
        <WhoAmI />
        <Tecnologies />
      </div>
    </div>
  );
}

export default App;
