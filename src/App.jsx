import React, { useEffect, useState } from 'react';
import Home from './Pages/Home/Home';
import LoaderScreen from './Pages/LoaderScreen/LoaderScreen';
import './App.css';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoader ? <LoaderScreen /> : <Home />}
    </div>
  );
}