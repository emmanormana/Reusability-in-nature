const authInreducers = (saveduser = [], action) => {
    switch (action.type) {
     
     case "CHECK":
        return action.payload;
      default:
        return saveduser;
    }
  };
  
  export default authInreducers;