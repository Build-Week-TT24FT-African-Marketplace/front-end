import React from "react"


export default function NewUserForm(props){

const {change, submit, values, disabled} = props;

const onChange = (evt) => {
    const {name, value} = evt.target;
    change(name, value);
}
const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
}
return(
    <div>
       <form onSubmit={onSubmit}>
           <label>
               Name
           <input name="username" value={values.username} type="text" onChange={onChange}> </input>
           </label>

           <label>
               Email
           <input name="email" value={values.email} type="email" onChange={onChange}> </input>
           </label>
           <label>
               Password
           <input name="password" value={values.password} type="text" onChange={onChange}> </input>
           </label>

        {/*radio for buyer/seller select */}
           <label>
          Buyer
          <input
            type="radio"
            name="role"
            value={1}
            checked={values.role === 1}
            onChange={onChange}
          />
        </label>
        <label>
          Seller
          <input
            type="radio"
            name="role"
            value={2}
            checked={values.role === 2}
            onChange={onChange}
          />
        </label>
           <button disabled={disabled}>Create new account</button>
           </form> 

    </div>
)


}