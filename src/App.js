import React, { useMemo } from 'react';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Profile } from "../src/components/Profile";
import { Detail } from './components/Detail';
import { getEarthQuakeProfile, getEarthQuakeSite, getEarthQuakeAllData } from './data/EarthQuakeData';


function DetailPageRenderer() {
 
  let { detailId } = useParams();

  return (

    <Detail dataId={detailId} />
  );
}

const App = () => {
  const earthQuakeData = useMemo(getEarthQuakeAllData,[]);
  const profileData = useMemo(getEarthQuakeProfile, []);
  const siteData = useMemo(getEarthQuakeSite,[]);

  return (
    <div>
      <div className="navbar">
        <div className="menu-items">
          <Router>
            <div>
              <nav>
                <ul className="header">
                  <li>
                    <Link to="/">{<img style={{height:'40px',width:'40px'}} src={siteData.logoImage} alt='Logo'/> }</Link>
                  </li>
                  <h1 style={{color: '#777777'}}>{siteData.title}</h1>
                  <li>
                    <Link to="/profile" >{`Welcome ${profileData.firstName}`}</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Routes>
              <Route path="/" exact element={<Home data={earthQuakeData} />} />
              <Route path="/profile" element={<Profile data={profileData} />} />
              <Route path="/details/:detailId" element={<DetailPageRenderer />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
