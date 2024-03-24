import { NavLink } from "react-router-dom";

function Navbar() {

    const activeStyle = {
        backgroundColor : 'purple',
        color : 'white'
    }
    return (
        <div>
            <ul>
                <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/map" style={({isActive}) => isActive? activeStyle: undefined}>Map</NavLink></li>
                <li><NavLink to="/mapmove" style={({isActive}) => isActive? activeStyle: undefined}>Map Move</NavLink></li>
                <li><NavLink to="/maplevelchange" style={({isActive}) => isActive? activeStyle: undefined}>Map Level Change</NavLink></li>
                <li><NavLink to="/mapmarker" style={({isActive}) => isActive? activeStyle: undefined}>Map Marker</NavLink></li>
                <li><NavLink to="/mapmarkerwin" style={({isActive}) => isActive? activeStyle: undefined}>Map Marker Window</NavLink></li>
                <li><NavLink to="/calendar" style={({isActive}) => isActive? activeStyle: undefined}>캘린더 보기</NavLink></li>
                <li><NavLink to="/calendardf" style={({isActive}) => isActive? activeStyle: undefined}>캘린더 데이트피커 보기</NavLink></li>
                <li><NavLink to="/calendarip" style={({isActive}) => isActive? activeStyle: undefined}>캘린더 눌러서 보기</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;