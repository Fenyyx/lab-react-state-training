import React, { useState } from 'react';

const Dice = () => {
  // Definimos state para guardar la imagen actual
  const [image, setImage] = useState(`src/assets/images/dice-empty.png`);

  // Creamos una función para actualizar la imagen
  const randomDice = () => {
    setImage(`src/assets/images/dice-empty.png`)
    setTimeout(() => {
        const random = Math.floor(Math.random()*6) +1
        setImage(`src/assets/images/dice${random}.png`)},1000)
    }


  
  return (
    //
 <div>
<img
src={image}
alt="Dice"
onClick={randomDice}
/>
 </div>
  );
}
export default Dice;