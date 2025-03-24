import "./App.css";
import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  AOS.init();
  return (
    <div className="relative min-h-screen">
      {/* Radial Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_800px_at_100%_200px,#DAC6B5,transparent)]"></div>

      {/* Content */}
      <div className="font-poppins">
        <Routes />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
