import React from "react";
import { useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// import PrivateRouteList from './utils/PrivateRouteList';
import UserItemList from './UserItemList';
import styled from "styled-components";


const ProjListStyled = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-between;

`;

const ProjStyledA = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-between;
  color: ${(pr) => pr.theme.secondaryColor};
  font-size: "2rem";
  font-weight: normal;
`;

const ProjStyledB = styled.div` 
  color: ${(pr) => pr.theme.secondaryColor};
  font-size: "1.5rem";
  font-weight: normal;
`;

const MarketPage = (userItemList) => {
//   const { url } = useRouteMatch();

  return (
    <>
        Display Item List Here.
        <div>
            {/* <PrivateRouteList path="/market/user" uList={UserItemList} /> */}
            {/* <Route path="/market" ItemList={ItemList} /> */}
            <UserItemList />
        </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    errorText: state.errorText,
    userlist: state.itemArr,
  };
};

export default connect(mapStateToProps, { UserItemList })(MarketPage);
