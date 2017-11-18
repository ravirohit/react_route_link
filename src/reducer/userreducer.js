export const userReducer=function(state =[],action){
  console.log("user reducer called",state);
  switch(action.type){
    case "NEW_USER_REG":
      console.log("user added");
      state = Object.assign( action.payload);
      break;
    case "DELETE_USER":
      //state=Object.assign(state);
      consol.log("user deleted");
      break;
  }
  return state;
}