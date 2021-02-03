
import React, { useState } from 'react'
// import { initialItem } from '../reducers/itemStateReducer';
import addItems from '../actions/itemStateAction'


export const initialValues = {
    listing_name: '',
    listing_description: '',
    listing_price: '',
    marketplace_id: '',
    user_id: ''
}

export default function ItemForm(props){

const {values} = props

const [newitem, setNewItem] = useState(initialValues);


const onChange = (evt) => {
    const {name, value} = evt.target;
    setNewItem({...newitem, [name]: value});
  };

const onSubmit = (evt) => {
    evt.preventDefault()
    addItems(newitem);
}

return (
<div>
    ASDFITEM

    <form onSubmit={onSubmit} >

        <label>
            Item Name
        <input name="listing_name" value={values.name} type="text" onChange={onChange}> </input>
        </label>

        <label>
            Description
        <input name="listing_description" value={values.description} type="text" onChange={onChange}>  </input>
        </label>

        <label>
            Price
        <input name="listing_price" value={values.price} type="number" step="0.01" onChange={onChange}> </input>
        </label>

        <label>
            Location
        <select onChange={onChange} value={values.location} name="listing_location">
            <option value="">- Select an location -</option>

            <option value="1">Kenya</option>
            <option value="2">Rwanda</option>
            <option value="3">South Africa</option>
            <option value="4">Ghana</option>
            <option value="5">Tanzania</option>
            <option value="6">Senegal</option>
          </select>
        </label>
        <button >Submit</button>

    </form>

</div>)
}


// disabled={disabled}
// , change, submit, disabled

