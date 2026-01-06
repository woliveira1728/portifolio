import TemplatePage from "./pages/TemplatePage";
import { Home } from './pages/Home/index';
import { useEffect, useState } from "react";

const App = () => {

  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  };

  const [ showModal, setShowModal ] = useState(false);
  const [ theme, setTheme ] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <TemplatePage
      showModal={showModal}
      setShowModal={setShowModal}
      theme={theme}
      onToggleTheme={toggleTheme}
    >
      <Home showModal={showModal} setShowModal={setShowModal} />
    </TemplatePage>
  )
};

export default App;