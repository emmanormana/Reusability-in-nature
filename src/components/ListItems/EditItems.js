import React, { useState ,useEffect} from 'react';
import {getALLItems} from '../../actions/index';
import { getPrice } from '../../actions';
import {updateOrder} from '../../actions/index';
import { useDispatch,useSelector } from 'react-redux';
import { storage } from '../Profile/firbase'
import * as SpinnerBS from 'react-bootstrap';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image10 from '../../images/pexels-mali-maeder-802221.jpg';
var Total=0
const EditItems = (props) => {
console.log(props)
  const dispatch = useDispatch();
    const currentId = props.match.params.id
      const orders = useSelector( state => state.Items)
      console.log(orders)
      const Filter = orders.filter( items => items.itemID==currentId) 
      useEffect( () => {
        dispatch(getALLItems());
      }, [dispatch]);
    const [orderData, setOrderData] = useState({  category: Filter[0].category, quantity:  Filter[0].quantity , weight:Filter[0].weight, 
      description :Filter[0].description, price:'',image:Filter[0].image});
      const [loading, setloading] = useState(false)
      const [image, setUserImage] = useState(null)
    const onSubmit =  (e) => {
          e.preventDefault();
          imageUpload()
          // window.location = '/SellerItems'   
      };

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
                orderData.image = url
                dispatch(updateOrder(currentId,orderData));
                setloading(true)
          window.location = `/SellerItems`   
               })
             })
        }
        else{
        dispatch(updateOrder(currentId,orderData));
          window.location = `/SellerItems`   }
      }
      
      var priceObj = getPrice();
      var category=orderData.category
      /// to get the price for the entered material
      for (var key in priceObj){
        if(category===key)
        var price = priceObj[key]
      }
      // to get the entered Quantity and Weight
      var Quantity=orderData.quantity
      var Weight=orderData.weight
      //To calculate the total price for the order
      Total = Weight*price*Quantity
      //add the order price to the orderData object to save it on the database
      orderData.price = Total




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
				<h4 style={{color:"white"}}>Edit Item</h4>
				<form>



					<div class="row">

						<div class="col-sm-6">
							<div class="form-group">
              <label for="inputEmail" style={{color:"white"}}>Select Category</label>
              <select
                required="true"
                  className = "form-control"
                   value = {orderData.category}
                  onChange = {(e) => setOrderData({ ...orderData ,category : e.target.value})}
                  text-align = "center"
                 >

                   <option value = "">{Filter[0].category}</option>
                     <option value = "Iron">Iron</option>
                    <option value = "copper">Copper</option>
                    <option value = "paper">Paper</option>
                    <option value = "plastic">Plastic</option>
                    </select>
							</div>
						</div>

            </div>  

            <div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="inputEmail" style={{color:"white"}}>Quantity</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.quantity}
                  onChange = {(e) => setOrderData({ ...orderData ,quantity : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Quantity"/>
							</div>
						</div>

            <div class="col-sm-6">
							<div class="form-group">
								<label for="inputEmail" style={{color:"white"}}>Weight of item (Kg)</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.weight}
                  onChange = {(e) => setOrderData({ ...orderData ,weight : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Weight/Unit (Kg)"/>
							</div>
						</div>
</div>

				


					<div class="form-group">
						<label for="inputSubject" style={{color:"white"}}>Photo for your items</label>
            <input
                  required={true}
                  type='file'
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
					</div>


					<div class="form-group">
						<label for="inputMessage" style={{color:"white"}}>Description</label>
						<textarea type = "text" class="form-control" id="inputMessage" rows="5" value = {orderData.description} onChange = {(e) => setOrderData({ ...orderData ,description : e.target.value})} required></textarea>
					</div>



					<div class="text-center" style={{color:"white"}}>
         Environment Support: {Total.toFixed(2)} JD
					<br/>	<button type="submit" onClick= {onSubmit} class="btn btn-primary"><i class="fa fa-paper-plane"></i> {  loading && <SpinnerBS.Spinner
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
export default EditItems;