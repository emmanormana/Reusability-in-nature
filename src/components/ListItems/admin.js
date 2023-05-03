import React, { useState,useEffect } from 'react';
import { getALLItems, purchaseProcess } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {  Link} from "react-router-dom" ;
// import { updateOrder,deleteOrder } from '../../actions/index';
// import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import swal from 'sweetalert';
import ItemsNav from '../Navbar/itemsNav';
import AdminItemsNav from '../Navbar/adminItemsNav';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import {itemActions } from '../../actions';
import $ from "jquery";

const AdminItems =({currentId}) =>{
const TableItems = props => (
  
                <tr>
                     <td>{props.Item.category}</td>
                     <td>{props.Item.quantity}</td>
                     <td class="form-row justify-content-center">{props.Item.weight}</td>
                     <td>{props.Item.description}</td>
                     <td class="form-row justify-content-center">{props.Item.price}</td>
                     <td>
                     {<a href={props.Item.location}> User Location</a>}
                     </td>
                     <td>
                     <img src= {props.Item.image} width="120" height="120" class="w3-round" />
                     {console.log(props.Item.image)}
                     </td>
                     {/* <td> <Link to ={props.Item.location} class="card-link">User Location</Link> </td> */}
                     <td>
                     <button className={props.Item.itemID} type="primary" disabled={props.Item.rejectionStat} onClick= {()=> {purchaseFunc(props.Item.itemID,props.Item.price)}} >Buy </button>
                    <button className={props.Item.itemID} type="primary" disabled={props.Item.rejectionStat} onClick= {()=> {rejection(props.Item.itemID)}} > Reject </button>
                    <button id={props.Item.itemID} type="primary" disabled={props.Item.acceptationStat} onClick= {()=> {acceptation(props.Item.itemID,props.Item.status)}} > Accept </button></td>
                      </tr>
                     /* <Link herf = "#"  onClick={() => onSubmit(Item.itemID) }>Reject</Link></td> */
        // <a href="#" onClick={() => { props.deleteStudent(props.student.studentId) }}>delete</a>
)



  const [status, setStatus] = useState({accepSelectorStat:false,selectorStat:false});
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    const Items = useSelector(state => state.Items)
    const [itemData, setItemData] = useState({  category: ''})
    const [filteredData, setFilterData] = useState({ filteredItems: [] })
    console.log(itemData)
    console.log(filteredData.filteredItems)
    // const Items = useSelector(state => state.Items)
    // const filters = ["Iron", "wood", "glass","plastic"]
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);


function purchaseFunc(itemId,price){
      // var confirmation = window.confirm("Are you sure you want to Purchase this item?");
      //  if(confirmation){
        swal({
          title: "Successful",
          text: "Check your paypal account for the invoice!",
          icon: "success",
          button: "Ok",
        })
        var purchaseInfo ={
        itemId : itemId,
        price: price,
        status:"Collected",
        acceptationStat: true,
        rejectionStat: true
      }
      var idToStr =purchaseInfo.itemId +""
      var accepSelector= "#"+idToStr
      var selector= "."+idToStr
      $(accepSelector).prop('disabled', true);
      $(selector).prop('disabled', true);
      dispatch(purchaseProcess(purchaseInfo));
      // window.location='/AdminItems'
      // alert('Great !! Your purchase was successful, you can check your PayPal account ');
    // }
    // else
      // alert('Your purchase has been cancelled,Thank you!');
  }


    function itemsList() {
      let listedItems = (filteredData.filteredItems.length > 0)? filteredData.filteredItems : Items 
      console.log(filteredData.filteredItems)
      return listedItems.map(currentItem => {
          return <TableItems Item = { currentItem } key = { currentItem._id }/>; 
      })
  }


  function onChangeCategory(e) {
    let string = e.target.value
    setItemData({category: e.target.value }
    ) 
    let filteredItems = Items.filter(item => item.category.includes(string))
    setFilterData({filteredItems:filteredItems})
    console.log(filteredItems)
}

function rejection(itemId){
  // var confirmation = window.confirm("Are you sure you want to Reject this item?");
  // if(confirmation){
          var rejectionInfo ={
          itemId : itemId,
          status:"Rejected",
          acceptationStat: false,
          rejectionStat: true
        }
        var idToStr =rejectionInfo.itemId +""
        var selector= "."+idToStr
        var accepSelector= "#"+idToStr
        $(selector).prop('disabled', true);
        $(accepSelector).prop('disabled', false);
        dispatch(itemActions(rejectionInfo));
      // }
    }

    function acceptation(itemId,status){
      console.log("acc cliked")
      var acceptationInfo ={
        itemId : itemId,
        status:"Accepted",
        acceptationStat: true,
        rejectionStat: false
      }
      var idToStr =acceptationInfo.itemId +""
      var accepSelector= "#"+idToStr
      var selector= "."+idToStr
      $(accepSelector).prop('disabled', true);
      $(selector).prop('disabled', false);
      
      // setStatus({ ...status ,acceptationStat : true})
      dispatch(itemActions(acceptationInfo));
      console.log(acceptationInfo)
    }


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
          <a href="/AdminProfile" style={{color:"white"}}> Profile </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>




<br/>
                <div className="col">
                {/* <label>Select Category</label> */}
                {/* <p>Filter by category</p> */}
                <select
                required="true"
                  className = "form-control"
                  onChange = {onChangeCategory }
                  // onChange = {(e) =>setItemData({category: e.target.value}) }
                  text-align = "center"
                  style={{width:"300px"}}
                 >
                   <option value = "">Select a category</option>
                    <option value = "Iron">Iron</option>
                    <option value = "copper">Copper</option>
                    <option value = "paper">Paper</option>
                    <option value = "plastic">Plastic</option>
                    </select>
                    </div><br></br>
      <table className = "table" >
               <thead className = "thead">
                   <tr>
                       <th>Category</th>
                       <th>Quantity</th>
                       <th>Weight</th>
                       <th>Description</th>
                       <th>Enviroment support</th>
                       <th>Location</th>
                       <th>Image</th>
                       <th>Action</th> 
                   </tr>
               </thead>
               <tbody>
               {itemsList()}
              </tbody>
               </table>
           </div>
    )
}
export default withRouter(AdminItems);