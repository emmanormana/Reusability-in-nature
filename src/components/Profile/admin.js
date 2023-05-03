import React, { useEffect } from 'react';
import { getAdmin } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import AdminNav from '../Navbar/adminNav';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import {Link} from "react-router-dom" ;
import image10 from '../../images/pexels-mali-maeder-802221.jpg';
import image11 from '../../images/background-recycle-symbol-260nw-110941127.webp';
import image12 from '../../images/crumpled-2537807_1280.jpg';
import image13 from '../../images/42-18260830edit.jpg';
import image14 from '../../images/wp2529177.jpg';
import image15 from '../../images/wp2529191.jpg';
// we are retreiving all the admin items 
const AdminProfile =() =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    
    const AdminProfile = useSelector(state => state.Profiles)
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getAdmin());
    }, [dispatch]);

    return (
         <div style={{background: `url(${image10})`,width:"100%",height:"1000px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>


           <div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">Dawerha&copy; is a nonprofit website with free Membership. Everything posted must be free, legal and appropriate for all ages.
               Dawerha is a recycling website which aims to encourage people to recycle more and recycle more often. Our  mission is to protect the environment by converting waste materials into new materials and objects.</p>
            </div>
            
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
                <a href="https://m.facebook.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-facebook-f fa-1x"></i></a>
               <a href="https://twitter.com/?lang=en" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-twitter fa-1x"></i></a>
               <a href="https://www.youtube.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-youtube fa-1x"></i></a>
               <a href="https://mail.google.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fas fa-envelope fa-1x"></i></a>
               <a href="https://www.instagram.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-instagram fa-1x"></i></a> <br/><br/>
               <button onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('user_id'); window.location=('/')}}  style={{color:"white"}} className="btn btn-outline-success"> Sign out </button>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img src={image6} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"></img>
            <strong>Dawerha</strong>
          </a>
          <a href="/AdminItems" style={{color:"white"}}> All Items </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>
    <br/><br/>
    {AdminProfile.map((Info) => (
<div class="card mx-auto" style={{width: "22rem"}} >
  <img class="card-img-top" src={Info.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{Info.username}</h5>
    <p class="card-text">Admin</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{Info.email}</li>
    <li class="list-group-item">{Info.phoneNumber}</li>
    {/* <li class="list-group-item">{Info.location}</li> */}
  </ul>
  {/* <div class="card-body">
  <a href="https://www.ammancity.gov.jo/ar/main/index.aspx" class="card-link">Greater Amman Municipality</a>
  </div> */}
       </div>
          ))}
<br/><br/><br/><br/>

        
           </div>
    )

}

export default AdminProfile;
