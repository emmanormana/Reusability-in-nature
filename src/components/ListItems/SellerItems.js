import React, { useEffect , useState } from 'react';
import {connect} from 'react-redux';
import { getALLItems } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {  Link} from "react-router-dom" ;
import { updateOrder,deleteOrder } from '../../actions/index';
import {withRouter} from 'react-router-dom';
import ItemsNav from '../Navbar/itemsNav';
import AdminItemsNav from '../Navbar/adminItemsNav';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image10 from '../../images/pexels-matheus-bertelli-1144687.jpg';


const SellerItems =({currentId}) =>{
    const dispatch = useDispatch();
    const orders = useSelector(state => state.Items)
    // const Filter = orders.filter(items => items.user_id==localStorage.getItem('user_id'))
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);

    const onSubmit = async (e) => {
        dispatch(deleteOrder(e))
        window.location.href = '/SellerItems'
   };
   return (
<div>
   

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
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>

<div>
      <table className = "table" >
               <thead className = "thead">
                   <tr>
                       <th>Category</th>
                       <th>Quantity</th>
                       <th>Weight</th>
                       <th>Description</th>
                       <th>Enviroment support</th>
                       <th>Status</th>
                       <th>Image</th>
                       <th>Update</th>
                       <th>Delete</th> 
                   </tr>
               </thead>
               <tbody >
                  { orders.filter(items => items.user_id==localStorage.getItem('user_id')).map((post) => (
                     <tr>
                     <td>{post.category}</td>
                     <td>{post.quantity}</td>
                     <td class="form-row justify-content-center">{post.weight}</td>
                     <td>{post.description}</td>
                     <td class="form-row justify-content-center">{post.price}</td>
                     <td>{post.status}</td>
                     <td>
                     <img src= {post.image} width="120" height="120" class="w3-round" />
                     {console.log(post.image)}
                     </td>
                     <td><Link to ={"/EditItems/"+post.itemID} className="btn btn-secondary">update</Link></td>
                     <td><button  type="submit" onClick={() => onSubmit(post.itemID) } className="btn btn-secondary">Delete</button></td>
                 </tr>
          ))}  
              </tbody>
               </table>
               </div>

             
           </div>
    )
}
export default withRouter(SellerItems);