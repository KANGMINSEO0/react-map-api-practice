import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Map from './pages/Map';
import MapMove from './pages/MapMove';
import MapLevelChange from './pages/MapLevelChange';
import MapMarker from './pages/MapMarker';
import MapMarkerWin from './pages/MapMarkerWin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='map' element={<Map/>}/>
          <Route path='mapmove' element={<MapMove/>}/>
          <Route path='maplevelchange' element={<MapLevelChange/>}/>
          <Route path='mapmarker' element={<MapMarker/>}/>
          <Route path='mapmarkerwin' element={<MapMarkerWin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
