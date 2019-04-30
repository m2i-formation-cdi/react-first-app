import React from 'react';
import FruitList from './FruitList';
import FruitForm from './FruitForm';

import base from '../../base';

class FruitApp extends React.Component {

   constructor(){
      super();

      this.state = {
         fruitData: ["Pommes", "Poires", "Tomates"]
      }

      this.deleteFruit = this.deleteFruit.bind(this);
      this.addFruit = this.addFruit.bind(this);
   }

   componentWillMount(){
      base.syncState('/', {
         context: this,
         state: 'fruitData'
      });
   }

   getData(){
      if(this.state.fruitData.length == 0){
        return [];
      } else {
         return this.state.fruitData;
      }
   }

   deleteFruit(index){
      let fruits = this.getData();
      fruits.splice(index,1);
      this.setState({fruitData: fruits});
   }

   addFruit(fruitName){
      let fruits = this.getData();
      console.log(fruits);

      fruits.push(fruitName);
      fruits.sort();
      this.setState({fruitData: fruits});
   }

   render(){
      return (<div>
         <h1>Listes des fruits </h1>
         <FruitForm addItem={this.addFruit}/>
         <FruitList 
            list={ this.getData() } 
            removeItem={this.deleteFruit}
         />
      </div>);
   }
}

export default FruitApp;