import React from 'react'

export default function ItemForm(props){

const {name, description, price, location, onChange, onSubmit} = props


return (
<div>
    <form onSubmit={}>

        <label>
            Item Name
        <input name="itemName" value={name} type="text" onChange={}> </input>
        </label>

        <label>
            Description
        <input name="description" value={description} type="text" onChange={}>  </input>
        </label>

        <label>
            Price
        <input name="Price" value={price} type="number" step="0.01" onChange={}> </input>
        </label>

        <label>
            Location
        <select onChange={} value={location} name="location">
            <option value="">- Select an location -</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
          </select>
        </label>
        <button> Submit</button>
    </form>

</div>)
}
