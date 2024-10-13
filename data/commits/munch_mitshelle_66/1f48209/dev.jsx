import React, { useState } from 'react';
import './App.css';
import QuiGon from './qui-gon.svg';
import ObiWan from './obi-wan.svg';
import ObiWanOld from './obi-hilt-old.svg';
import DarthMaul from './darth-maul-hilt.svg';
import AhsokaHilt from './ahsoka-hilt.svg';
import AnakinHilt from './anakin-hilt.svg';
import VaderHilt from './darth-vader-hilt.svg';
import KyloHilt from './kylo-ren-hilt.svg';

function App() {
  const [selection, setSelection] = useState({
    color: '',
    hilt: '',
  });

  const handleSelection = (color, hilt) => {
    setSelection({ color, hilt });
  };

  const { color, hilt } = selection;

  return (
    <div className="App">
      {/* Colors */}
      {['Green', 'Blue', 'Red', 'Purple', 'Yellow', 'White'].map((clr) => (
        <button
          key={clr}
          className="testsub"
          onClick={() => handleSelection(clr.toLowerCase(), hilt)}
        >
          {clr}
        </button>
      ))}
      <br />

      {/* Hilts */}
      {[
        { name: 'Darth Maul', hilt: DarthMaul },
        { name: 'Qui Gon', hilt: QuiGon },
        { name: 'Obi Wan', hilt: ObiWan },
        { name: 'Obi Wan Old', hilt: ObiWanOld },
        { name: 'Ahsoka Tano', hilt: AhsokaHilt },
        { name: 'Anakin', hilt: AnakinHilt },
        { name: 'Vader', hilt: VaderHilt },
        { name: 'Kylo', hilt: KyloHilt },
      ].map(({ name, hilt: HiltComponent }) => (
        <button
          key={name}
          className="testsub"
          onClick={() => handleSelection(color, name.toLowerCase())}
        >
          {name}
        </button>
      ))}

      <div className="lightsaber">
        {/* Blade */}
        <div className={`blade ${color}-clr`}></div>

        {/* Hilt */}
        {hilt && (
          <label className="hilt" htmlFor="on-off">
            <img src={hilt} alt="Hilt" />
          </label>
        )}
      </div>

      <div className="infobox">
        {/* Infobox based on color */}
        {color && <div>{color}</div>}
      </div>
    </div>
  );
}

export default App;