import './App.css';
import Header from './layout/header';
import Breadcrumb from './components/smallheader';
import Footer from './layout/footer';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <div className="App" >

  <Header />
    <Breadcrumb />
      <Dashboard />
  <Footer/>

    </div>
  );
}

export default App;
