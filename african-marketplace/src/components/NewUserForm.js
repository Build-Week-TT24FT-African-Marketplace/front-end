import React, { useState } from "react";
import { addUser } from '../actions/loginStateAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const newUser = {
    user_first_name: '',
    user_email: '',
    user_password:'',
    role: null,}

const NewUserForm = (props) => {
  const [newSignup, setNewSignup] = useState(newUser)
//   const {disabled} = props;
  const { push } = useHistory();

  const onChange = (evt) => {
      const {name, value} = evt.target;
      setNewSignup({...newSignup, [name]: value});
  }

  const onSubmit = (evt) => {
      evt.preventDefault();
      props.addUser(newSignup);
      push('/login')
  }

  return(
      <div>
          ASDFUser
        <form onSubmit={onSubmit}>
            <label>
                Name
            <input name="user_first_name" value={newSignup.username} type="text" onChange={onChange}
            />
            </label>

            <label>
                Email
            <input name="user_email" value={newSignup.email} type="email" onChange={onChange}
            />
            </label>

            <label>
                Password
            <input name="user_password" value={newSignup.password} type="text" onChange={onChange}
            />
            </label>
            {/*radio for buyer/seller select */}
            <label className='radio-btn'>
            Buyer
            <input
              type="radio"
              name="role"
              value={1}
            //   checked={newSignup.role === 1}
              onChange={onChange}
            />
            </label>

            <label className='radio-btn'>
            Seller
            <input
              type="radio"
              name="role"
              value={2}
            //   checked={newSignup.role === 2} 
              onChange={onChange}
            />
            </label>
            <button type='submit'>Create new account
            </button>
            </form> 
        </div>
  );
};

const mapStateToProps = state => {
    return {
        error: state.errorText
    }
}

export default connect(mapStateToProps, {addUser}) (NewUserForm);