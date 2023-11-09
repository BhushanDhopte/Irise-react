import { useReducer } from "react";

function reducer(state,action){
    console.log(state,action,"state action")

    switch(action.type){
        case "Increment":
            return {count:state.count+1}
            case "Decrement":
            return {count:state.count-1}
            case "reset":
            return {count:0}
            default:
                return state;
    }

}

function UseReducer (){
    const initialstate ={count:0}

    const [state,dispatch]=useReducer(reducer,initialstate);

    function IncrementCount(){
        dispatch({type:"Increment"})
    }
    function DecrementCount(){
        dispatch({type:"Decrement"})
    }
    function ResetCount(){

    dispatch({type:"reset"})
    }

    return(
        <div>
             <h1>Use-Reducer</h1>
             <h1>Counter: {state.count}</h1>
             <button onClick={IncrementCount}>+</button>
             <button onClick={DecrementCount}>-</button>
             <button onClick={ResetCount}>reset</button>
        </div>
    )
}

export default UseReducer;