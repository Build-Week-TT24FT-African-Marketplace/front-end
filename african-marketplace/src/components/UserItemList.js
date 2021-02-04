 
import React, { useEffect } from "react";
import ItemCard from './ItemCard'
import {fetchItems} from  '../actions/itemStateAction'
import { useDispatch, useSelector } from 'react-redux';

const UserItemList = (props) => {
const { role } = props;

const dispatch = useDispatch()
const { itemArr } = useSelector(state => state.itemState)
console.log(itemArr)

useEffect(() => {
  dispatch(fetchItems())
}, [dispatch]);

  // conssetItemArray()t {itemArr, role} = props;
  //add item button -> displays add item component, HERE ON THIS PAGE!
  //edit button -> displays edit item component, ON ITEM CARD - with turnary!
  //delete button -> deletes item component, ON ITEM CARD!
  

  return (

    <div>***UItemList***
      {/* { (role === 2 ) ? `${<button> Add Item </button>}` : null}  */}
    {/* {Add item button is shown based on role 1 = seller 2 = buyer role is set to 1 by default} */}
      <div>
        {itemArr.map((item) => {
          return(
          <ItemCard item={item} role={role}/>)
        })}
      </div>

    </div>
  );
};



// // export default UserItemList;
// const mapStateToProps = state => {
//   return {
//       error: state.errorText
//   }
// }

export default UserItemList;

// connect(mapStateToProps, {role}