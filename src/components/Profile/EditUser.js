import React, { useState ,useEffect} from 'react';
import {updateUser,getUser} from '../../actions/index';
import { storage } from './firbase'
import { useDispatch,useSelector } from 'react-redux';
import * as SpinnerBS from 'react-bootstrap';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image10 from '../../images/pexels-mali-maeder-802221.jpg';

const EditUser = (props) => {
  const currentId = props.match.params.id
    const users = useSelector(state => state.Profiles)
    const Filtered = users.filter( user => user.userID == currentId) 
    console.log(Filtered)
    const [adminProfile, setAdminProfile] = useState({  username: Filtered[0].username , email:  Filtered[0].email, 
      phoneNumber: Filtered[0].phoneNumber, location: Filtered[0].location ,image:Filtered[0].image});
    const dispatch = useDispatch();
    const [image, setUserImage] = useState(null)
    const [loading, setloading] = useState(false)
        const onSubmit = async (e) => {
          e.preventDefault();
          imageUpload()
      }
      function handleChangeImage(e){
        e.preventDefault();
          setUserImage( e.target.files[0])
        }
        const imageUpload  = async (e) => {
          if(image){
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
                adminProfile.image = url
                dispatch(updateUser(currentId,adminProfile));
                setloading(true)
          window.location = `/SellerProfile`   
               })
             })
        }
        else{
        dispatch(updateUser(currentId,adminProfile));
          window.location = `/SellerProfile`   }
      }
        useEffect(() => {
          dispatch(getUser());
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
          <a href="/home" style={{color:"white"}}> Home </a>
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
        <div class="container-lg">
	<div class="row">
		<div class="col-md-8 mx-auto">
			<div class="contact-form">
				{/* <h4 style={{color:"white"}}>Edit Profile</h4> */}
				<form>



					<div class="row">

						<div class="col-sm-6">
							<div class="form-group">
              <label for="inputEmail" style={{color:"white"}}>Choose your image</label>
              <input
                  required={true}
                  type='file'
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
							</div>
						</div>

            </div>  

            <div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="inputEmail" style={{color:"white"}}>Username</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {adminProfile.username}
                  onChange = {(e) => setAdminProfile({ ...adminProfile ,username : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert username"/>
							</div>
						</div>

</div>


					<div class="form-group">
						<label for="inputMessage" style={{color:"white"}}>Email</label>
            <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {adminProfile.email}
                  onChange = {(e) => setAdminProfile({ ...adminProfile ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert email"/>	
              	</div>


                <div class="form-group">
						<label for="inputMessage" style={{color:"white"}}>Phone Number</label>
            <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {adminProfile.phoneNumber}
                  onChange = {(e) => setAdminProfile({ ...adminProfile ,phoneNumber : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert phoneNumber"/>	
              	</div>


					<div class="text-center" style={{color:"white"}}>
     	<button type="submit" onClick= {onSubmit} class="btn btn-primary"><i class="fa fa-paper-plane"></i> {  loading && <SpinnerBS.Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />} Update</button>

					</div>            
				</form>
			</div>
		</div>
	</div>
</div>
</div>






        </div>
    )
}
export default EditUser;