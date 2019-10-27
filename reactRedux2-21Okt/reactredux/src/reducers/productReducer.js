const proReducer = (state = [], action) => {
    switch (action.type) {
        case "productUpdateAction":
         return action.payload;
    
        default:
            return state;
    }
  };

  export default proReducer;