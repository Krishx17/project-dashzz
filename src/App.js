import './App.css';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

// const title = "dashz";
function App() {
  const stylePad = {
    display : "flex",
  }
  return (
    <div style={stylePad}>
     <Sidebar/>
     <Dashboard/>
     <Profile/>
    </div>
  );
}

export default App;
