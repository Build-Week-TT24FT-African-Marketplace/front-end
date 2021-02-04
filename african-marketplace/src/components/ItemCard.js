import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

const ItemCard = (props) => {

console.log('*****Itemdeatails*****', props);

    return (
        <div>***ITEMCARD*****
            <div>
                A{props.item.listing_name}A
            </div>
            <div>
                B{props.item.listing_description}B
            </div>
            <div>
                C{props.item.listing_price}C
            </div>
            <div>
                D{props.item.marketplace_id}D
            </div>
        </div>
    )
}


export default (ItemCard);



/* Edit and Delete button renders based on role role 1 = seller 2 = buyer role is set to 1 by default*/
// { (role === 2 ) ? `${<button> Edit Item </button>}` : null}
// { (role === 2 ) ? `${<button> Delete Item </button>}` : null}





// const mapStateToProps = state => {
//     return {
//         itemState: state.itemState,
//         isLoading: state.isLoading,
//         error: state.errorText
//     }
//   }
  
//   export default connect(mapStateToProps, {fetchItems})(UserItemList);