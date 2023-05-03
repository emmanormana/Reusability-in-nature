import  axios from 'axios';
const url = 'http://localhost:5000';
//get all items
export const fetchOrders = () => axios.get(url+'/ItemsList' );
//create an item
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);
//getting the admin info
export const AdminProfile = () => axios.get(url+'/AdminUser' );
//getting the user profile
export const UserProfile = () => axios.get(url + '/UserProfile' );
//updating the item
export const updateOrder = (id, updateOrder) => axios.put(`${url}/items/${id}`, updateOrder);
//deleting the item
export const deleteOrder = (id) => axios.delete(`${url}/delete/${id}`);
//creating the new user
export const createUser = (newUser) => axios.post(url+ '/signup', newUser);
//checking the user to login 
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser);

export const payPal = (purchaseInfo) => axios.post(url+ '/purchase', purchaseInfo);

//update user 
export const updateUser = (id, updateUser) => axios.put(`${url}/UsersUpdate/${id}`, updateUser);

export const Actions = (actionsInfo) => axios.post(url+ '/actions', actionsInfo);