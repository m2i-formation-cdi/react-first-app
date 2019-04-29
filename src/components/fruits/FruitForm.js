import React from 'react';

function FruitForm(props){

   return (
      <form>
         <input type="text" placeholder="Votre fruit" />
         <button type="submit">Ajouter</button>
      </form>
   );
}

export default FruitForm;