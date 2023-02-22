import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import {International} from '../pages';
import {Sports} from '../pages';
import {Header} from '../components/header/header';

export const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/international" element={<International/>}/>
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </BrowserRouter>
  )
}