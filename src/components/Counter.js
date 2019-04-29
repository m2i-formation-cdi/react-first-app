import React from 'react';
import './counter.css';

class Counter extends React.Component {

   constructor(){
      super();
      //Initialisation de l'état
      this.state = {
         clickCount: 0
      };

      this.addClickCount = this.changeClickCount.bind(this,1);
      this.substractClickCount = this.changeClickCount.bind(this, -1);
   }
  
   changeClickCount(amount){
      let newClickCount = this.state.clickCount + amount;
      this.setState({clickCount: newClickCount});
   }
   
   showDetails(text){
      console.log(text);
   }

   render(){

      let message;

      if(this.state.clickCount >0){
         message = <div>Positif</div>;
      }else if (this.state.clickCount ==0){
         message = <div>Nul</div>
      } else {
         message = <div className="negative">Négatif</div>
      }

      let fruits = ["Pommes", "Poires", "Oranges"];
      let fruitList = fruits.map((item)=>{
         return (
            <li>
               {item}
               <button onClick={
                  ()=>{this.showDetails(item)}}
               >
                  Afficher</button>
            </li>
         );
      });

      return (
         <div>
            <h1>Compte des clics</h1>
            <p>nb de clicks : {this.state.clickCount}</p>
            {message}
            <button onClick={this.addClickCount}>Cliquez moi ++</button>

            <button onClick={this.substractClickCount}>
            cliquez moi --</button>

            <ul>{fruitList}</ul>
         </div>
      );
   }

}

export default Counter;