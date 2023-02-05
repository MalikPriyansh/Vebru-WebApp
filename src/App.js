import {BrowserRouter,Route,Routes} from  'react-router-dom'
import HomeScreen from './Component/homescreen';
import Services from './Component/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Component/products';
import Productinfo from './Component/productsinfo';
function App() {
  return (
      <BrowserRouter>
            <Routes>
                  <Route path='/' element={<HomeScreen></HomeScreen>}/>
                  <Route path='/services' element={<Services></Services>}/>
                  <Route path='/products' element={<Products></Products>} />
                  <Route path="/productinfo/:productid" element={<Productinfo></Productinfo>} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
