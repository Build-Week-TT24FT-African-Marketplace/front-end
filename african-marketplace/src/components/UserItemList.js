/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import ItemForm from './NewItemForm';
import ItemCard from './ItemCard'
import { fetchItems } from  '../actions/itemStateAction'


const UserItemList = (props, {fetchItems, itemArr, isLoading, error,}) => {
const [showItemForm, setShowItemForm] = useState(false);

const role = localStorage.getItem('role');
console.log(role);

const displayForm = () => {
  setShowItemForm(!showItemForm);
}

useEffect(() => {
  props.fetchItems();

}, []);



  if (error) {
    return <h2>We got an error: {error}</h2>;
  }


  //add item button -> displays add item component, HERE ON THIS PAGE!
  //edit button -> displays edit item component, ON ITEM CARD - with turnary!
  //delete button -> deletes item component, ON ITEM CARD!
  //role needs to sent to local storage
  //

  return (
    <div>
      <h2>***UItemList***</h2>
      {/* {Add item button is shown based on role 1 = seller 2 = buyer role is set to 1 by default} */}
      {role == 1 ? <button onClick={displayForm}> Add Item </button> : null} 
      {showItemForm && <ItemForm />} 
      <div>
        {isLoading === true ? (<h1>Loading your items!</h1>):

        (props.itemState.itemArr.map((item, index) => {
          return <ItemCard item={item} role={role} key={index}/>}
        ))
        }
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
      itemState: state.itemState,
      isLoading: state.isLoading,
      error: state.errorText
  }
}

export default connect(mapStateToProps, {fetchItems})(UserItemList);