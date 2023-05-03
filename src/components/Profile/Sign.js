import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/index';
import { storage } from './firbase';
import swal from 'sweetalert';
import Background from '../../images/lake-irene-1679708_1280.webp';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image10 from '../../images/pexels-mali-maeder-802221.jpg';
import image11 from '../../images/background-recycle-symbol-260nw-110941127.webp';
import image12 from '../../images/crumpled-2537807_1280.jpg';
import image13 from '../../images/42-18260830edit.jpg';
import image14 from '../../images/wp2529177.jpg';
import image15 from '../../images/wp2529191.jpg';
import * as SpinnerBS from 'react-bootstrap';

const Sign = ({ currentId }) => {
  ///this is for sign up
    const [userData, setUserData] = useState({  username: '', email: '', password: '', phoneNumber: '', location: '', image: null});
  ////this is for sign in
  const [image, setUserImage] = useState(null)
  const [loading, setloading] = useState(false)

    const dispatch = useDispatch();
   ////sigin up button
    const onSubmit = async (e) => {
        e.preventDefault();
        /*
        Input Email conditions:
        @ should present
        .mysite@.com.my  [ can not start with dot "."]
        @you.me.net [ No character before @ ]
        mysite123@gmail.b [ ".b" is not a valid tld ]
        mysite@.org.org [ tld can not start with dot "." ]
        .mysite@mysite.org [ an email should not be start with "." ]
        mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
        mysite..1234@yahoo.com [double dots are not allowed]
         */
        if (userData.username.length === 0) {
          swal({
            title: "username is empty",
            text: "Please fill your username...",
            icon: "info",
            button: "Ok",
          });
        }
        if ( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)) ) {
          swal({
            title: "Invalid Email",
            text: "Please enter a valid email address...",
            icon: "info",
            button: "Ok",
          });
        }
        //Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
        if ( !(/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/.test(userData.password)) ) {
          swal({
            title: "Weak Password",
            text: "Password must contain at least 6 characters, including lowercase,numbers and special character...",
            icon: "info",
            button: "Ok",
          });
        }
        //Input PhoneNumber should be 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number
        if ( !(/^\d{10}$/.test(userData.phoneNumber)) ) {
          swal({
            title: "Invalid Phone Number",
            text: "Please enter a valid phone number...",
            icon: "info",
            button: "Ok",
          });
        }
        if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)) && (/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/.test(userData.password)) &&  (/^\d{10}$/.test(userData.phoneNumber)) && userData.username.length > 0) {
          console.log("userData",userData);
        //  dispatch(createUser(userData));
        // window.location = '/login';
      imageUpload();
    }
      };

    

   function handleChangeImage(e){
    e.preventDefault();
      setUserImage( e.target.files[0])      
    }
    /// to get the image url and save it on the firebase 
    const imageUpload  = async () => {
      if (image) {
      const imageLink = storage.ref(`images/${image.name}`).put(image)
      imageLink.on(
         "state_changed",
         snapshot => {},
         error => {
           console.log(error)
         },
         () => {
           
           storage
           .ref("images")
           .child(image.name)
           .getDownloadURL()
           .then(url => {
            userData.image = url
             console.log(url);
             dispatch(createUser(userData));
             setloading(true)
             window.location = '/login';
           })
         })
        } else {
           swal({
            title: "No file chosen for image",
            text: "Please choose a file...",
            icon: "info",
            button: "Ok",
          });
        }
        }
  
   
    return (
      <div style={{background: `url(${image10})`}}>

        
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
               <a href="https://www.instagram.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-instagram fa-1x"></i></a> 
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
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>
  

        <div>
<div class="signup-form">
    <form>
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" placeholder="First Name" required={true}  value = {userData.username} onChange = {(e) => setUserData({ ...userData , username : e.target.value})}/></div>
				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required={true}/></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control"  placeholder="Email (Paypal account)" required={true}  value = {userData.email} onChange = {(e) => setUserData({ ...userData ,email : e.target.value})}/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control"  placeholder="Password" required={true} value = {userData.password} onChange = {(e) => setUserData({ ...userData ,password : e.target.value})}/>
        </div>
		<div class="form-group">
            <input type="tel" class="form-control" placeholder="Phone Number" required={true} value = {userData.phoneNumber} onChange = {(e) => setUserData({ ...userData ,phoneNumber : e.target.value})}/>
        </div>  
        <div class="form-group">
            <input type='file' className = "form-control" onChange = {handleChangeImage}/>
        </div>              
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" onClick= {onSubmit} class="btn btn-success btn-lg btn-block">  { loading && <SpinnerBS.Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/> } Register Now</button><br/>
            <div class="text-center">Already have an account? <a href="/login">Sign in</a></div>
        </div>
    </form>

</div>
</div>



        </div>
    )
}
export default Sign;

