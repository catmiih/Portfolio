import './App.css';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WhoAmI } from './components/whoami';
import { Tecnologies } from './components/tecnologies';
import { Projects } from './components/projects';

function App() {
  return (
    <div className="App bg-default">
      {/* <Menu/> */}
      <Banner />
      <div className='mt-20 lg:p-5'>
        <div className='mt-60 mb-80'>
          <WhoAmI />
        </div>

        <div className='mt-60 mb-80'>
          <Tecnologies />
        </div>

        <div className='mt-60 mb-80'>
          <Projects />
        </div>

      </div>
    </div>
  );
}

export default App;
