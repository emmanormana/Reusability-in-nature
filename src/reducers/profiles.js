const Profiles = (Profiles = [], action) => {
  switch (action.type) {
  //getting the admin
       case "AdminInfo":
      return action.payload;
      //getting the user
      case "UserInfo":
        return action.payload;
       case 'UPDATEUSER':
      return 
      default:
      return Profiles;
  }
};
export default Profiles;