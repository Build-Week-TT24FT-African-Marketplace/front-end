import React from 'react';

import styled from "styled-components";

const ItemCard = ({ listing_name, listing_description, listing_price, }) => {

    return (
        <div>***ITEMCARD*****
            <div>
                {listing_name}
            </div>
            <div>
                {listing_description}
            </div>
            <div>
                ${listing_price}
            </div>
            {/* <div>
                {listing_location}
            </div> */}
            
        </div>
    )
}

export default ItemCard;

/* Edit and Delete button renders based on role role 1 = seller 2 = buyer role is set to 1 by default*/
// { (role === 2 ) ? `${<button> Edit Item </button>}` : null}
// { (role === 2 ) ? `${<button> Delete Item </button>}` : null}