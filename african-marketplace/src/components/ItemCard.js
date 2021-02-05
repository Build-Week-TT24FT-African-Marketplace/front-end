import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { editForm } from './ItemEditForm';
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

    const role = localStorage.getItem('role')

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
            { (role === 2 ) ?
                <div>
                 `${<button onClick = {() => editForm()}> Edit Item </button>}`</div> : null}
            { (role === 2 ) ? 
                <div>`${<button onClick = {() => deleteItems()}> Delete Item </button>}`</div> : null}
          </div>
      </StyledItemCard>
    )
}

const mapStateToProps = state => {
    return {
        itemState: state.itemState,
        isLoading: state.isLoading,
        error: state.errorText
  
  export default connect(mapStateToProps, {editForm})(ItemCard);