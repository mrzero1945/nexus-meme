import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landpage from "./Landpage";
import AidropPage from "./AidropPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import WhitepaperPage from "./WhitepaperPage";
import StakingPage from "./StakingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/airdrop" element={<AidropPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
        <Route path="/staking" element={<StakingPage />} />
      </Routes>
    </div>
  );
}

export default App;
