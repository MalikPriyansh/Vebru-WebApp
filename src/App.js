import {BrowserRouter,Route,Routes} from  'react-router-dom'
import HomeScreen from './Component/homescreen';
import Services from './Component/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Component/products';
import Productinfo from './Component/productsinfo';
import Company from './Component/company';
import Contacts from './Component/contacts';
import OtherProducts from './Component/otherproducts';
function App() {
  return (
      <BrowserRouter>
            <Routes>
                  <Route path='/' element={<HomeScreen></HomeScreen>}/>
                  <Route path='/services' element={<Services></Services>}/>
                  <Route path='/products' element={<Products></Products>} />
                  <Route path="/company" element={<Company></Company>}/>
                  <Route path='/contacts' element={<Contacts></Contacts>} />
                  <Route path="/productinfo/:productid" element={<Productinfo></Productinfo>} />
                  <Route path="/otherproducts" element={<OtherProducts></OtherProducts>} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
