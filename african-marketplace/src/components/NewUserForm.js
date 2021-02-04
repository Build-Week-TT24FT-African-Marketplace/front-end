import React, { useState } from "react";
import { addUser } from '../actions/loginStateAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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

    <StyledLoginDiv>
      <StyledDiv>

     
        <StyledForm onSubmit={onSubmit}>
          <div>Sign Up</div>
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

      
         
          </StyledForm> 
          </StyledDiv>
          </StyledLoginDiv>
           

  );
};
const StyledForm = styled.form` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;

  label{margin: .5em;}
`
const StyledLoginDiv = styled.div`
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

export default connect(mapStateToProps, {addUser}) (NewUserForm);