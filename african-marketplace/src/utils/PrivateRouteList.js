import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserItemList from './UserItemList';
import ItemList from './ItemList';


const PrivateRouteList = ({ uList, ...rest}) =>  {
    return(<Route {...rest} render={
        (props) => {

            if (localStorage.getItem("token")) {
                if (localStorage.getItem("role") === "1") {
                return <UserItemList {...props} />;
                } else if (localStorage.getItem("role") === "2") {
                    return <ItemList {...props} />;
                }
            } else {
                console.log("BAD LIST ROUTE");
                return(<Redirect to='/market'/>);
            }
        }
    }/>);
};

export default PrivateRouteList;