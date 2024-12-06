import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Section from './components/section';
import Not_Found from './components/page_notFound';
import AboutPage from './components/about';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

function Layout({ isDayMode, toggleMode }) {
  return (
    <div className={`flex ${isDayMode ? 'bg-white' : 'bg-gray-900'} min-h-screen`}>
      <Navbar isDayMode={isDayMode} toggleMode={toggleMode} />
      <Section isDarkMode={!isDayMode} />
    </div>
  );
}

function NotFound({isDayMode, toggleMode}) {
  return (
    <div className={`flex ${isDayMode ? 'bg-white' : 'bg-gray-900'} min-h-screen`}>
      <Navbar isDayMode={isDayMode} toggleMode={toggleMode}/>
      <Not_Found isDarkMode={!isDayMode}/>
    </div>
  )
}

function About({isDayMode, toggleMode}) {
  return (
    <div className={`flex ${isDayMode ? 'bg-white' : 'bg-gray-900'} min-h-screen`}>
      <Navbar isDayMode={isDayMode} toggleMode={toggleMode}/>
      <AboutPage isDarkMode={!isDayMode}/>
    </div>
  )
}

function App() {
  const [isDayMode, setIsDayMode] = useState(false);

  const toggleMode = () => {
    setIsDayMode(prevState => !prevState);
  };

  const router = createBrowserRouter([
    {
      path: '/My-porto',
      element: <Layout isDayMode={isDayMode} toggleMode={toggleMode} />
    },
    {
      path:'/notFound',
      element: <NotFound isDayMode={isDayMode} toggleMode={toggleMode}/>
    },
    {
      path:'/About',
      element: <About isDayMode={isDayMode} toggleMode={toggleMode}/>
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
