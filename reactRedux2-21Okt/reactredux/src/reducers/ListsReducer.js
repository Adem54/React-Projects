const ListsReducer=(state="defaultStateList",action)=>{
    switch (action.type) {
        case "listUpdateAction":
            return action.payload
         
    
        default:
            return state;
    }
    

}

export default ListsReducer;