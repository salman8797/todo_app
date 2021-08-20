import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Landing from './components/landing/Landing';
export class Main extends Component {
   render() {
       return (
           <Switch>
               <div>
                   <Route exact path="/" component={Landing} />
                   <Route  path="/landing" component={Landing} />
               </div>
           </Switch>
          
       )
   }
}
 
export default Main
