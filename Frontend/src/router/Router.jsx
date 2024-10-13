import { Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/Home' />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<About />} />
        <Route path='/' element={<Blog />} />
        <Route path='/' element={<Contact />} />
    </Routes>
  )
}

export default Router