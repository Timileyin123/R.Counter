import NavBar from './navbar';
import Counters from './counters';
import './App.css';

function App() {
   return (
 <div>
   <NavBar />
        <main className='container' style={{textAlign:'center', marginTop:80}}>
          <Counters/>
        </main>
     </div>
   );
 }

export default App;
