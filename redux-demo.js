const redux=require('redux');

const initialState={ counter:0 };

const counterReducer=(state=initialState,action)=>{

    if(action.type==='INCREMENT'){
        return{
            counter:state.counter+1,
        }
    }

    if(action.type==='DECREMENT'){
        return{
            counter:state.counter-1,
        }
    }

    return state;
};

const store=redux.createStore(counterReducer);

const subscriberFn=()=>{
    const lattestState=store.getState();
    console.log(lattestState);
}

store.subscribe(subscriberFn);

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})




