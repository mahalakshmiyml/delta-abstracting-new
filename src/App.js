import './App.scss';
import Menubar from './Components/Navbar/Menubar';
import FirstSection from './Components/FirstSection/FirstSection';
import WhoWeAre from './Components/FirstSection/WhoWeAre';
import WhatWeDo from './Components/FirstSection/WhatWeDo';
import References from './Components/FirstSection/References';
import Footer from './Components/Footer/Footer';
import Contact from './Components/ContactUs/Contact';

function App() {
  return (
    <div>
      <Menubar /> 
      <FirstSection  />
      <WhoWeAre />
      <WhatWeDo />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
