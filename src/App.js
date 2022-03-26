
import './App.css';
import Navbar from './component/Navbar';
import Form from './component/Form';
import Footer from './component/Footer';
import Copyright from './component/Copyright';
import RegistrationForm from './component/RegistrationForm';
import Banner from './component/Banner';
import Topbar from './component/Topbar';
import ExamSub from './component/ExamSub';
import Htmltestpage from './component/Htmltestpage';
import {BrowserRouter,Routes, Route} from 'react-router-dom';



function App() {
  return (

   <>
  <BrowserRouter>
  <Topbar/>
   <Navbar/>
      <Routes>
            <Route path="/home" element={ <Banner/>}/>
          <Route path="/lform" element={<Form/>}/>
          <Route path="/reg"  element={<RegistrationForm/>}/>
          <Route path="/examsub" element={<ExamSub/>}/>
          <Route path="/Htmltestpage" element={<Htmltestpage/>}/>
      </Routes>
      <Footer/>
   <Copyright/>
   </BrowserRouter>
   </>
   
   
  );
}

export default App;
