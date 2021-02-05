/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
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
      <StyledSideBar>
      <div className="bar"></div>
      <div className ="container">
        <h2>Stock</h2>
      <StyledItemList>
      {/* {Add item button is shown based on role 1 = seller 2 = buyer role is set to 1 by default} */}
      <StyledItemNew>{role == 1 ? <button onClick={displayForm}> Add New Item </button> : null} </StyledItemNew>
      {showItemForm && <ItemForm />} 
     
        {isLoading === true ? (<h1>Loading your items!</h1>):

        (props.itemState.itemArr.map((item, index) => {
          return <ItemCard item={item} role={role} key={index}/>}
        ))
        }
      </StyledItemList>
      </div>
      
      <div className="bar"></div>
      </StyledSideBar>
  
    </div>
  );
};
const StyledSideBar = styled.div`
display:flex;
.bar{
  /* width:0%;
  background-color:#ffb366;
  height:100vh; */
}
.container{
  width:90%;
}
`
const StyledItemList = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
margin:0px;

`

const StyledItemNew= styled.div`
display:flex;
flex-direction:column;
border:1px solid #ffb366;
justify-content:space-between;
align-items:center;
width:65%;
height:100%;
padding:10px;
margin:0px;
`

const mapStateToProps = state => {
  return {
      itemState: state.itemState,
      isLoading: state.isLoading,
      error: state.errorText
  }
}

export default connect(mapStateToProps, {fetchItems})(UserItemList);