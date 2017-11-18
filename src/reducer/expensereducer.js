
export const expense=(state={item:"new expense",id:1},action)=>{

      switch(action.type){
         case "ADD_EXPENSE":
                          console.log("add expense");
                          break;
         case "UPDATE_EXPENSE":
                           console.log("update expense");
                           break;

      }
      return state;

}