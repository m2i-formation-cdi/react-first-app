import React from 'react';

class FruitForm extends React.Component{

   constructor(props){
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(event){
      event.preventDefault();
      let newFruit = this.refs.fruitInput.value.trim();

      if(newFruit){
         this.props.addItem(newFruit);
         this.refs.fruitInput.value = '';
      }
   }

   render(){
      return (
         <form onSubmit={this.onSubmit}>
             <input type="text" 
                ref="fruitInput"
                placeholder="Votre fruit" />
             <button type="submit">Ajouter</button>
          </form> 
       );
   }
   
}

export default FruitForm;