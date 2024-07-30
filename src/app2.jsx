
import './App.css';
import Header from './components/header.jsx';
import Ouractivity from './components/ouractivity.jsx';
import OurMission from './components/mission.jsx';
import OurGallery from './components/ourGallery/ourgallery.jsx';
import About from './components/about.jsx';
import Impact from './components/impact.jsx';
import Team from './components/team/team.jsx';


function App2() {
  return (

      <div className='flex flex-col items-center lg:flex'>

              <Header/>
              <div className=''> 
                <Ouractivity/>

              </div>
             
              <div className='h-screen mt-96'> 
                <OurMission/>

              </div>
              
              {/* <OurGallery/> */}
              <div className='pt-96 lg:pt-24 h-full relative'>
               <Impact/>

              </div>
              
              <div className='mt-9'>
                <About/>
              </div>
              <Team/>
              


          
      </div>





  );
}
export default App2;
