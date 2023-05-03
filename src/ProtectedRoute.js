import React from 'react';
import {Route, Redirect} from 'react-router-dom' ;
function ProtectedRoute({token: token, component: Component, ...rest}) {
    return (<Route {...rest} render = {(props) => {
   if (token) {
       return <Component {...props}/>
   } else {
       return ( <Redirect to = { {pathname: '/', state: {from: props.location}} }/> )
     }
    }}/>
 )     
}
export default ProtectedRoute;