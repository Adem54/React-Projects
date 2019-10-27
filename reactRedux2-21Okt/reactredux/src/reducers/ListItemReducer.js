const ListItemReducer=(state="",action)=>{
    switch (action.type) {
        case "listItemUpdateAction":
            return action.payload
    
        default:
            return state;
    }
}

export default ListItemReducer;