import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import EditForm  from './ItemEditForm';
import { deleteItems } from '../actions/itemStateAction'

const StyledItemCard= styled.div`
display:flex;
flex-direction:column;
border:1px solid #ffb366;
font-size:0.80rem;
justify-content:space-between;
align-items:center;
width:28%;
height:auto;
padding:10px;
margin:15px;
margin-bottom:-2px;
`
const ItemCard = (props) => {

console.log('*****Itemdetails*****', props);

    const [showEditForm, setShowEditForm] = useState(false);

    const role = localStorage.getItem('role');
    const displayEditForm = () => {
        setShowEditForm(!showEditForm)
    };

    const itemToDelete = {listing_id: props.item.listing_id}

    const deletebtn = () => {
        deleteItems(itemToDelete);
    };

    return (
        <StyledItemCard>
            <div>
                {props.item.listing_name}
            </div>
            <div>
                {props.item.listing_description}
            </div>
            <div>
                {props.item.listing_price}
            </div>
            <div>
                {props.item.marketplace_id}
            </div>
            {/* Edit and Delete button renders based on role.  Role 1 = seller 2 = buyer role is set to 1 by default */}
            {role == 1 ?
                 <button style={{ fontSize: "1.0rem", color: "#ffb366", backgroundColor:"#7a2828",}} onClick = {displayEditForm}> Edit Item </button> : null}
                 {showEditForm && <EditForm/>}
            {role == 1 ? 
                <button style={{ fontSize: "1.0rem", color: "#ffb366", backgroundColor:"#7a2828",}} onClick = {deletebtn}> Delete Item </button> : null}
      </StyledItemCard>
    );
};

const mapStateToProps = state => {
    return {
        itemState: state.itemState,
        isLoading: state.isLoading,
        error: state.errorText
    }
}
  
  export default connect(mapStateToProps, {EditForm})(ItemCard);