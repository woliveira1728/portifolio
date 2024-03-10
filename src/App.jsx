import TemplatePage from "./pages/TemplatePage";
import { Home } from './pages/Home/index';
import { useState } from "react";

const App = () => {

  const [ showModal, setShowModal ] = useState(false);

  return (
    <TemplatePage setShowModal={setShowModal} >
      <Home showModal={showModal} setShowModal={setShowModal} />
    </TemplatePage>
  )
};

export default App;