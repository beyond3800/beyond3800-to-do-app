import {React,Component} from "react";
import Grocery from "./Grocery";
import { GroceryProvider } from "./context/grocerycont";


class App extends Component{
    render(){

        return(
          <GroceryProvider>
            <Grocery />
          </GroceryProvider>
          
        )
        }
}
export default App