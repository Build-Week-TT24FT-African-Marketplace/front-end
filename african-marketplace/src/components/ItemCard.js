import React from 'react'

import styled from "styled-components"



export default function ItemCard(props){
    const {item, role} = props;



    return (


        <div>***ITEMCARD*****
            <div>
                {item.listing_name}
            </div>
            <div>
                {item.listing_description}
            </div>
            <div>
                ${item.listing_price}
            </div>
            <div>
                {item.listing_location}
            </div>
            {/* Edit and Delete button renders based on role role 1 = seller 2 = buyer role is set to 1 by default*/}
             { (role === 2 ) ? `${<button> Edit Item </button>}` : null}
             { (role === 2 ) ? `${<button> Delete Item </button>}` : null}
        </div>
    )
}