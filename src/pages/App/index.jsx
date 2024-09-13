import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../components/Navbar';

import '../../App.css';
import Layout from '../../components/Layout';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/signin', element: <Signin /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
