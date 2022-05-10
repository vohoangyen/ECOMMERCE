import './App.css';
import Navbar from './componnents/Navbar';
import Slider from './componnents/Slider';
import NewArrivals from './products/NewArrivals';
import Footers from './componnents/footer';
import { getListProduct } from './redux/slice'
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

function App() {
  return (
    <>
      <Slider />
      <NewArrivals />
      {/* <Footers /> */}
    </>
  );
}

export default App;
