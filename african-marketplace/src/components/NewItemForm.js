import React, { useState } from 'react'
import { addItems } from '../actions/itemStateAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


export const initialValues = {
    listing_name: '',
    listing_description: '',
    listing_price: '',
    marketplace_id: '',
    user_id: ''
}

const ItemForm = (addItems) => {

const [newItem, setNewItem] = useState(initialValues);
const { push } = useHistory();

const onChange = (evt) => {
    const {name, value} = evt.target;
    setNewItem({...newItem, [name]: value});
  };

const onSubmit = (evt) => {
    evt.preventDefault()
    addItems(newItem);
    // push('/')
}

return (
    <div>
        ASDFITEM
        <form onSubmit={onSubmit} >
            <label>
                Item Name
            <input name="listing_name" value={newItem.name} type="text" onChange={onChange} placeholder='Item Name' 
            />
            </label>

            <label>
                Description
            <input name="listing_description" value={newItem.description} type="text" onChange={onChange} placeholder='Item Description' 
            />
            </label>

            <label>
                Price
            <input name="listing_price" value={newItem.price} type="number" step="0.01" onChange={onChange} placeholder='Item Price' 
            />
            </label>

            <label>
                Market Location
            <select onChange={onChange} value={newItem.location} name="listing_location">
                <option value="">- Select a location -</option>
                <option value="1">Kenya</option>
                <option value="2">Rwanda</option>
                <option value="3">South Africa</option>
                <option value="4">Ghana</option>
                <option value="5">Tanzania</option>
                <option value="6">Senegal</option>
            </select>
            </label>
            <button type='submit' >Submit</button>
        </form>
    </div>
    );
};

const mapStateToProps = state => {
    return {
        error: state.errorText
    }
}

export default connect(mapStateToProps, {addItems})(ItemForm);