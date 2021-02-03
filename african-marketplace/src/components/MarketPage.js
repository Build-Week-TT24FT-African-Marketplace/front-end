import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import { connect } from "react-redux";
// import PrivateRouteList from './utils/PrivateRouteList';
import UserItemList from './UserItemList';
import ItemList from './ItemList';


// import { fetchProjects } from "../actions/index";
// import styled from "styled-components";


// const ProjListStyled = styled.div` 
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-content: space-between;

// `;

// const ProjStyledA = styled.div` 
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-content: space-between;
//   color: ${(pr) => pr.theme.secondaryColor};
//   font-size: "2rem";
//   font-weight: normal;
// `;

// const ProjStyledB = styled.div` 
//   color: ${(pr) => pr.theme.secondaryColor};
//   font-size: "1.5rem";
//   font-weight: normal;
// `;

const MarketPage = (props) => {
  // const { userlist, baselist } = props;

//   const { url } = useRouteMatch();

//   useEffect(() => {
//     return props.fetchProjects();
//   }, []);


  return (
 
<div>
    Display Item List Here.
    <div>
        {/* <Switch> */}
        {/* <PrivateRouteList path="/market/user" uList={UserItemList} /> */}
        {/* <Route path="/market" ItemList={ItemList} /> */}
        <UserItemList />
        {/* </Switch> */}
    </div>
</div>

  );
};

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.isLoading,
//     errorText: state.errorText,
//     userlist: state.userlist,
//     baselist: state.baselist,
//     role: state.role,
//   };
// };

export default MarketPage;

// connect(mapStateToProps, { fetchItemList })(MarketPage);
