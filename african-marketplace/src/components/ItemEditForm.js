import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { editItems } from '../actions/itemStateAction';
import { connect } from 'react-redux';
import styled from 'styled-components';

export const initialValues = {
  listing_name: '',
  listing_description: '',
  listing_price: '',
  marketplace_id: ''
}

function EditForm(props) {
  // const { push } = useHistory();
  const [editValues, setEditValues] = useState(initialValues);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault()
    const itemToEdit = {
        listing_name: editValues.listing_name,
        listing_description: editValues.listing_description,
        listing_price: parseInt(editValues.listing_price),
        marketplace_id: parseInt(editValues.marketplace_id),
        user_id: parseInt(localStorage.getItem('user_id'))
    }
    console.log('editValues**', itemToEdit);
    props.editItems(itemToEdit);
    
    // push('/')
}

  return (
  <StyledFormDiv>
    <StyledDiv>
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="listing_name">Item Name</label>
      <input
        name="listing_name"
        onChange={handleChanges}
        value={editValues.title}
      />
      <label htmlFor="listing_description">Description</label>
      <input
        name="listing_description"
        onChange={handleChanges}
        value={editValues.metascore}
      />
      <label htmlFor="listing_price">Price</label>
      <input
        name="listing_price"
        onChange={handleChanges}
        value={editValues.director}
        type="number" 
        step="0"
      />
      <label htmlFor="marketplace_id">Market Location
            <select onChange={handleChanges} value={editValues.location} name="marketplace_id">
                <option value="">- Select a location -</option>
                <option value="1">Kenya</option>
                <option value="2">Rwanda</option>
                <option value="3">South Africa</option>
                <option value="4">Ghana</option>
                <option value="5">Tanzania</option>
                <option value="6">Senegal</option>
            </select>
      </label>
      <button type='submit' onClick={onSubmit}>Update Item</button>
    </StyledForm>
  </StyledDiv>
  </StyledFormDiv>
  );
}
const StyledForm = styled.form` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;

  label{margin: .5em;}
  button{margin: 1em;}
`
const StyledFormDiv = styled.div`
 display: flex;
 align-content:center;
 justify-content:center;
 margin-top:3em;
`
const StyledDiv = styled.div`
   border: 2px solid ffb366;
   width:75%;

`

const mapStateToProps = state => {
  return {
      error: state.errorText
  }
}

export default connect(mapStateToProps, {editItems})(EditForm);
