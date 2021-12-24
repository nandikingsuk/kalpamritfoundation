import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Aboutus from './screens/Aboutus';
import Mission from './screens/Mission';
import Wildlife from './screens/Wildlife';
import Environment from './screens/Environment';
import Trustee from './screens/Trustee';
import Donors from './screens/Donors';
import Donateus from './screens/Donateus';
import Sitemap from './screens/Sitemap';
import Termsandconditions from './screens/Termsandconditions';
import Privacypolicy from './screens/Privacypolicy';
import Faq from './screens/Faq';
import Latestannouncements from './screens/Latestannouncements';
import Notfound from './screens/Notfound';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/about-us" element={ <Aboutus />} />
            <Route exact path="/mission" element={ <Mission />} />
            <Route exact path="/wildlife" element={ <Wildlife />} />
            <Route exact path="/environment" element={ <Environment />} />
            <Route exact path="/trustee" element={ <Trustee />} />
            <Route exact path="/donors" element={ <Donors />} />
            <Route exact path="/donate-us" element={ <Donateus />} />
            <Route exact path="/sitemap" element={ <Sitemap />} />
            <Route exact path="/terms-and-conditions" element={ <Termsandconditions />} />
            <Route exact path="/privacy-policy" element={ <Privacypolicy />} />
            <Route exact path="/faq" element={ <Faq />} />
            <Route exact path="/latest-announcements" element={ <Latestannouncements />} />
            <Route path="*" element={ <Notfound /> } />
        </Routes>
    </Router>
  )
}

export default App
