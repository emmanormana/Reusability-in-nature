const authreducers = (user = [], action) => {
    switch (action.type) {
     
     case "ADD":
        return [...user, action.payload];
      default:
        return user;
    }
  };
  
  export default authreducers;