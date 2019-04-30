import React from 'react';
import { conditionalExpression } from '@babel/types';

function FruitList(props){
   let fruitData = props.list;

   /*
   console.log(fruitData);

   fruitData = [];
   */

   let removeItem = props.removeItem;

   
   let fruitItems = fruitData.map(
      (item, index) => {
         return (<li>
            {item} 
            <button onClick={()=>removeItem(index)}>
               Delete
            </button>
         </li>
         );
      }
   )
   

   return (
      <ul>{fruitItems}</ul>
   );
}

export default FruitList;