import React from 'react';

const ListGroup = ({items,textProperty,valueProperty,selectedItem,onItemSelect}) => {
    return (
    <ul className="list-group">
{
    items.map((item,index)=>(
<li key={item[valueProperty] ? item[valueProperty]:index}
className={item === selectedItem ?"list-group-item active":""}
onClick={()=>onItemSelect(item)}>
    
    {item[textProperty]}
</li>
    ))
}

</ul>
    );
};

ListGroup.defaultProps={
    textProperty:"name",
    valueProperty:"_id"
}
export default ListGroup;