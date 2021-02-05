import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import EditForm  from './ItemEditForm';
import { deleteItems } from '../actions/itemStateAction'

const StyledItemCard= styled.div`
display:flex;
flex-direction:column;
border:1px solid black;
justify-content:space-between;
align-items:center;
width:20%;
height:25vh;
margin:2em;
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
                A{props.item.listing_name}A
            </div>
            <div>
                B{props.item.listing_description}B
            </div>
            <div>
                C{props.item.listing_price}C
            </div>
            <div>
                D{props.item.marketplace_id}D
            </div>
            {/* Edit and Delete button renders based on role.  Role 1 = seller 2 = buyer role is set to 1 by default */}
            {role == 1 ?
                 <button onClick = {displayEditForm}> Edit Item </button> : null}
                 {showEditForm && <EditForm/>}
            {role == 1 ? 
                <button onClick = {deletebtn}> Delete Item </button> : null}
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