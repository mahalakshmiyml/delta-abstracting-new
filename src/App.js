import './App.scss';
import Menubar from './Components/Navbar/Menubar';
import FirstSection from './Components/FirstSection/FirstSection';
import WhoWeAre from './Components/FirstSection/WhoWeAre';
import WhatWeDo from './Components/FirstSection/WhatWeDo';
import References from './Components/FirstSection/References';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Menubar /> 
      <FirstSection  />
      <WhoWeAre />
      <WhatWeDo />
      <References />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
