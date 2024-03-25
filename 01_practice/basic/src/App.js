import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Map from './pages/Map';
import MapMove from './pages/MapMove';
import MapLevelChange from './pages/MapLevelChange';
import MapMarker from './pages/MapMarker';
import MapMarkerWin from './pages/MapMarkerWin';
import MapMoveToCenter from './pages/MapMoveToCenter';
import CalendarBasic from './pages/CalendarBasic';
import CalendarDatePicker from './pages/CalendarDatePicker';
import CalendarInput from './pages/CalendarInput';

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
          <Route path='mapmovetocenter' element={<MapMoveToCenter/>}/>
          <Route path='calendar' element={<CalendarBasic/>}/>
          <Route path='calendardf' element={<CalendarDatePicker/>}/>
          <Route path='calendarip' element={<CalendarInput/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
