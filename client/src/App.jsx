import './App.css'
import { Toaster } from 'react-hot-toast';
import Routes from "./Routes";

function App() {
  return (
    <div className="font-poppins">
     <Routes />
     <Toaster />
    </div>
  )
}

export default App
