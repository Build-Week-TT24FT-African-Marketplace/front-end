import React from "react";
import ItemCard from './ItemCard'
const UserItemList = (props) => {

  const {item_list, role} = props;
  //add item button -> displays add item component, HERE ON THIS PAGE!
  //edit button -> displays edit item component, ON ITEM CARD - with turnary!
  //delete button -> deletes item component, ON ITEM CARD!
  

  return (
    <div>
      <div>
        {item_list.map((item) => {
          <ItemCard item={item} role={buyer}/>
        })}
      </div>
      {/* {Add item button is shown based on role 1 = seller 2 = buyer role is set to 1 by default} */}
     { (role == 2 ) ? `${<button> Add Item </button>}` : null}
    </div>
  );
};

export default UserItemList;
