import React from 'react'

export default function ItemForm(props){

const {values, change, submit, disabled} = props

const onChange = (evt) => {
    const {name, value} = evt.target;
    change(name, value);
  };
const onSubmit = (evt) => {
    evt.preventDefault()
    submit();
}
return (
<div>
    <form onSubmit={onSubmit} >

        <label>
            Item Name
        <input name="itemName" value={values.name} type="text" onChange={onChange}> </input>
        </label>

        <label>
            Description
        <input name="description" value={values.description} type="text" onChange={onChange}>  </input>
        </label>

        <label>
            Price
        <input name="price" value={values.price} type="number" step="0.01" onChange={onChange}> </input>
        </label>

        <label>
            Location
        <select onChange={onChange} value={values.location} name="location">
            <option value="">- Select an location -</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
          </select>
        </label>
        <button disabled={disabled}> Submit</button>
    </form>

</div>)
}
