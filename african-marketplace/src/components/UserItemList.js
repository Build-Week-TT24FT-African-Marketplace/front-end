import React, { useEffect } from "react";
import { connect } from 'react-redux';

import ItemForm from './NewItemForm';
import ItemCard from './ItemCard'
import { fetchItems } from  '../actions/itemStateAction'


const UserItemList = ({fetchItems, itemArr, isLoading, error, role}) => {

// useEffect(() => {
//   fetchItems();



  if (error) {
    return <h2>We got an error: {error}</h2>;
  }


  //add item button -> displays add item component, HERE ON THIS PAGE!
  //edit button -> displays edit item component, ON ITEM CARD - with turnary!
  //delete button -> deletes item component, ON ITEM CARD!

  return (
    <div>
      <h2>***UItemList***</h2>
      {/* {Add item button is shown based on role 1 = seller 2 = buyer role is set to 1 by default} */}
      {/* {(role === 2 ) ? `${<button> Add Item </button>}` : null}  */}
      {/* <ItemForm /> */}
      {/* <div>
        {isLoading === true ? (<h1>Loading your items!</h1>):
        (itemArr.map(item => {
          return <ItemCard item={item} role={role}/>}
        ))}
      </div> */}
    </div>
  );
};


const mapStateToProps = state => {
  return {
      itemArr: state.itemArr,
      isLoading: state.isLoading,
      error: state.errorText
  }
}

export default connect(mapStateToProps, {fetchItems})(UserItemList);