import React, { useState } from 'react'
import { addItems } from '../actions/itemStateAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const initialValues = {
    listing_name: '',
    listing_description: '',
    listing_price: '',
    marketplace_id: ''
}

const ItemForm = (props) => {

const [newItem, setNewItem] = useState(initialValues);
const { push } = useHistory();

const onChange = (evt) => {
    const {name, value} = evt.target;
    setNewItem({...newItem, [name]: value});
  };

const onSubmit = (evt) => {
    evt.preventDefault()
    const itemToAdd = {
        listing_name: newItem.listing_name,
        listing_description: newItem.listing_description,
        listing_price: parseInt(newItem.listing_price),
        marketplace_id: parseInt(newItem.marketplace_id),
        user_id: parseInt(localStorage.getItem('user_id'))
    }
    console.log('newitem**', itemToAdd);
    props.addItems(itemToAdd);
    
    // push('/')
}

return (
    <StyledFormDiv>
       <StyledDiv>
       <StyledForm onSubmit={onSubmit} >
            <label>
               <div> Item Name</div>
            <input name="listing_name" value={newItem.name} type="text" onChange={onChange} placeholder='Item Name' 
            />
            </label>

            <label>
            <div>Description</div> 
            <input name="listing_description" value={newItem.description} type="text" onChange={onChange} placeholder='Item Description' 
            />
            </label>

            <label>
            <div>Price</div> 
            <input name="listing_price" value={newItem.price} type="number" step="0" onChange={onChange} placeholder='Item Price' 
            />
            </label>

            <label>
                Market Location
            <select onChange={onChange} value={newItem.location} name="marketplace_id">
                <option value="">- Select a location -</option>
                <option value="1">Kenya</option>
                <option value="2">Rwanda</option>
                <option value="3">South Africa</option>
                <option value="4">Ghana</option>
                <option value="5">Tanzania</option>
                <option value="6">Senegal</option>
            </select>
            </label>
            <button type='submit' onClick={onSubmit} >Submit</button>
        </StyledForm>
       </StyledDiv>
    </StyledFormDiv>
    );
};
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
   border: 2px solid grey;
   width:25%;

`
const mapStateToProps = state => {
    return {
        error: state.errorText
    }
}

export default connect(mapStateToProps, {addItems})(ItemForm);