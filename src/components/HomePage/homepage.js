import React, { Component } from "react";
import HomeNav from '../Navbar/homeNav';
import MapContainer from '../map.js';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image1 from "../../images/pexels-catherine-sheila-2409022.jpg";
import image2 from '../../images/pexels-pixabay-159751.jpg';
import image3 from '../../images/pexels-brotin-biswas-518543 (1).jpg';
import image10 from '../../images/pexels-mali-maeder-802221.jpg';
import image13 from '../../images/42-18260830edit.jpg';
import image14 from '../../images/wp2529177.jpg';
import image15 from '../../images/wp2529191.jpg';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
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
          <a href="/SellerProfile" style={{color:"white"}}> Profile </a>
          <a href="/AddItems" style={{color:"white"}}> Add Items </a>
          <a href="/SellerItems" style={{color:"white"}}> All Items </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>

  
    <div>
        <div className="container" style={{marginTop:"80px"}}>
        {/* <div className="container" style={{textAlign:"center",marginTop:"80px"}}> */}
          {/* <p className="lead "  style={{color:"white",fontSize:"30px",fontFamily:"Lucida Console"}}></p> */}


          <div class="row">

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={image1} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text" style={{fontFamily:"cursive"}}>This website aims to help our community to reduce waste in the first place, and to encourage all citizens to acquire the RECYCLING behavior.
People at homes, organizations & institutions, schools & colleges are all invited to join our website and start participating! 
Let’s all be responsible about enhancing our ENVIROMENT.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                    </div>
                    <small class="text-muted">Dawerha</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={image2} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text" style={{fontFamily:"cursive"}}>
User is able to add new items by clicking the add Item tab from the drop down menu, all fields are required to be filled:
Category (We accept Iron, Copper, Plastic & Paper), Quantity, Weight of each item (Kg), a brief description of the item (i.e bottles, plates, etc..)
And finally the Government Environmental Rebate will be calculated in the last field.
The user can view all items that user added and they can edit or delete them.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                    </div>
                    <small class="text-muted">Dawerha</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={image3} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text" style={{fontFamily:"cursive"}}>we will receive your form and elaborate immediately. Within 48 hours, we will send each user weather we accepted or rejected their form.
In case of acceptance, it means that we will visit the user location upon a schedule and evaluate the items. After the evaluation, if items got accepted, we will collect them and send the payment (electronic payment), users will receive emails to confirm payment.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                    </div>
                    <small class="text-muted">Dawerha</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>


    

    </div>
    );
  }
}