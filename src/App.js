import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminProfile from './components/Profile/admin'
import SellerProfile from './components/Profile/user'
import AdminItems from './components/ListItems/admin'
import SellerItems from './components/ListItems/SellerItems'
import Homepage from './components/HomePage/homepage'
import AddItems from './components/ListItems/addItems'
import Sign from './components/Profile/Sign'
import { getALLItems } from './actions';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import ProtectedRoute from './ProtectedRoute';
import Login from './components/Profile/login';
import Viewpage from './components/View/view';
import {useState} from 'react';
import homeNav from './components/Navbar/homeNav';
import EditItems from './components/ListItems/EditItems';
import EditUser from './components/Profile/EditUser';
import LocationSearchModal from './components/map';

function App() {
//   // we need to define this dispatch using hooks
//   const dispatch = useDispatch();
// //   // now we have access to this dispatch we need to find away where we will dispatch this action ---the best way inside use Effect  : it is like component DidMount
//   useEffect(()=>{
//     dispatch(getAllItems());    // here we want to dispatch an action so we need to creat an action 
//   },[dispatch])
console.log(localStorage.getItem('token'))
const [token, setToken] = useState(localStorage.getItem('token'));
const [id, setID] = useState(localStorage.getItem('user_id'));
return (
  <div>
    <Router className="container">
    <div>
      {/* the user can't access admin's pages */}
      <Route path="/" exact component={Viewpage} />
      <ProtectedRoute path="/map"  component={LocationSearchModal}  token = {token} />
      <ProtectedRoute path="/home" component={Homepage}  token = {token} />
      <Route path="/sign" exact component={Sign}/>
      <Route path="/login" exact component={Login}/>
      <ProtectedRoute path="/EditItems/:id" component={EditItems} token = {token} />
      <ProtectedRoute path="/EditUser/:id" component={EditUser} token = {token} />
      <ProtectedRoute path="/SellerItems" component={SellerItems} token = {token}/>
      <ProtectedRoute path="/SellerProfile" component={SellerProfile} token = {token} />
      <ProtectedRoute path = "/AddItems" component = {AddItems} token = {token}/>
      <ProtectedRoute path = "/AdminProfile"  component = {AdminProfile} token = {token}   id={1}/>
      <ProtectedRoute path="/AdminItems" component={AdminItems} token = {token} id={1}/>
    </div>
  </Router>
</div>
);
}
export default App;


























// import React , {useEffect} from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import AdminProfile from './components/Profile/admin'
// import SellerProfile from './components/Profile/user'
// import AdminItems from './components/ListItems/admin'
// import SellerItems from './components/ListItems/SellerItems'
// import Homepage from './components/Navbar/homepage'
// import AddItems from './components/ListItems/addItems'
// import Sign from './components/Profile/Sign'
// import EditItems from './components/ListItems/EditItems'
// import { getALLItems } from './actions';
// import { useDispatch } from 'react-redux';
// import {useSelector} from 'react-redux'



// function App() {

//   return (
//     <div>
//       <Router className="container">
//       <div>
//         <Route path="/" component={Homepage} />
//         <Route path="/SellerItems" component={SellerItems} />
//         <Route path="/AdminItems" component={AdminItems} />
//         <Route path = "/AdminProfile"  component = {AdminProfile} />
//         <Route path="/SellerProfile" component={SellerProfile} />
//         <Route path="/AddItems" component={AddItems} />
//         <Route path="/sign"  component={Sign} />
//         <Route path="/EditItems/:id" component={EditItems}  />
//       </div>
//     </Router>
  
//   </div>
//   );
// }

// export default App;
