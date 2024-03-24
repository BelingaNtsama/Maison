// Loader.js
import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import '../Styles/loader.css'

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Écoute l'événement 'load' du navigateur
    window.addEventListener('load', () => {
      // La page est entièrement chargée, masque le loader
      setLoading(false);
    });

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  return (
    <div className={`loader ${loading ? 'show' : 'hide'}`}>
      {/* Votre loader ici (par exemple, une animation ou un spinner) */}
   <Circles/>
    </div>
  );
};

export default Loader;
