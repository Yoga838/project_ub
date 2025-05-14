import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from './component/navbar';
import Footer from './component/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen px-4 pt-20 bg-gray-100">
        <div className="max-w-5xl py-10 mx-auto text-center">
          
          <p className="mt-6 text-sm text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
