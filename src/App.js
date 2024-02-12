import "./App.css";

import { createContext, useEffect, useState } from "react";
import Form from "./Form";
import axios from 'axios';

// export const ThemeContext = createContext(null);

// function App() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <div className="App">
//       <ThemeContext.Provider value={theme}>
//         <Form></Form>
//         <label>
//           Use dark mode
//           <input
//             type="checkbox"
//             checked={theme === "dark"}
//             onChange={(e) => {
//               setTheme(e.target.checked ? "dark" : "light");
//             }}
//           />
//         </label>
//       </ThemeContext.Provider>

//       {/* <ThemeContext.Provider value={'dark'}>
//         <Form>

//         </Form>
//       </ThemeContext.Provider> */}
//     </div>
//   );
// }

// export default App;

import React from "react";

export default function App() {
  const url = "https://reqres.in/api/users?page=1";

  const [data,setData]=useState(null);
  useEffect(() => {

    //GetUsers();
   // sendObjectPost();
   //DeleteItem();
   //getUsersAxios();
   sendObjectByAxios();
  },[]);


function getUsersAxios(){
  axios.get(url)
  .then((data)=>{
    setData(data.data);
    console.log(data);
  })
}


function sendObjectByAxios(){
  // const obj={
  //   name:"Elvin",
  //   job:"Programmer"
  // };

  // axios.post("https://reqres.in/api/users",obj)
  // .then(data=>console.log(data));



  const obj={
    name:"Elvin",
    job:"Programmer"
  };

  axios.put("https://reqres.in/api/users/2",obj)
  .then(data=>console.log(data));
  
}

function DeleteItem(){
  fetch("https://reqres.in/api/users/2",{method:'DELETE'})
  .then(()=>alert('deleted successfully'));
}


function sendObjectPost(){
  const requestOptions={
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
  name:"Elvin",
  job:"Programmer"
})
  };

  fetch(url,requestOptions)
  .then(response=>response.json())
  .then(data=>console.log(data));
}

  function GetUsers() {
    fetch(url)
    .then((response=>response.json()))
    .then((data)=>{
      setData(data);
      console.log(data);
    })
    .catch((err)=>console.log(err));
  }
  return <div>
    {
      data && (
        <ul>
          {
            data.data.map((user)=>
            (
              <li key={user.id}>{user.email}</li>
            ))
          }
        </ul>
      )
    }
  </div>;
}
