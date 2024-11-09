import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Heading from './components/sections/Heading';
import Video from './components/sections/Video';
import ImageGallery from './components/sections/ImageGallery';
import Intro from './components/sections/Intro';
import Invitation from './components/sections/Invitation';
import Calendar from './components/sections/Calendar';
import Map from './components/sections/Map';
import Contact from './components/sections/Contact';
import Share from './components/sections/Share';
import AttendCountModal from './components/AttendCountModal';
import useWedding from './hooks/useWedding';
const cx = classNames.bind(styles);
function App() {
    const { wedding } = useWedding();
    if (!wedding)
        return null;
    const { date, galleryImages, groom, bride, location, message: { intro, invitation }, } = wedding;
    return (_jsxs("div", { className: cx('container'), children: [_jsx(Heading, { date: date }), _jsx(Video, {}), _jsx(Intro, { groomName: groom.name, brideName: bride.name, locationName: location.name, date: date, message: intro }), _jsx(Invitation, { message: invitation }), _jsx(ImageGallery, { images: galleryImages }), _jsx(Calendar, { date: date }), _jsx(Map, { location: location }), _jsx(Contact, { groom: groom, bride: bride }), _jsx(Share, { groomName: groom.name, brideName: bride.name, date: date }), _jsx(AttendCountModal, { wedding: wedding })] }));
}
export default App;
