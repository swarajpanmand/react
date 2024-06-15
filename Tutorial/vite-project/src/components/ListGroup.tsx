//import { Fragment } from "react";
import { MouseEvent, useState } from "react";


interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
  }
  

function ListGroup({items, heading ,onSelectItem}: Props){
     
  const  [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event)

  

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            //onClick={handleClick}
           onClick ={()=> {setSelectedIndex(index);
            onSelectItem(item);
           }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;