import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Mumbai", "Delhi", "Pune", "Nagpur", "Satara"];

//   const handleSelectItem = (item:string)=>{
//     console.log(item);
//   }

//   return (
//     <div>
//       <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
//     </div>
//   );
// }

// import Alert from "./components/Alert";

// function App() {
//   return <Alert>
//     Hello World
//   </Alert>;
// }

function App() {

  const [alertVisible, setAlertVisible] = useState(false);


  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>My alert</Alert>}
      <Button
        color="dark"
        onClick={() => setAlertVisible(true)}
        children="my button"
      />
    </div>
  );
}
export default App;
