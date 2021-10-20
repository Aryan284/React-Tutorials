import React from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Home, About, Contact, Whoop, Services, History} from "./pages";


// import { useState } from 'react';
// import restr from "./restaur.jpg";

// Conditional Rendering

// function SecureComponent(){
//   return(
//     <h1>
//       Only Authorised
//     </h1>
//   );
// }


// function RegularComponent(){
//   return(
//     <h1>
//       Anyone
//     </h1>
//   );
// }

function App(){
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />} >
        <Route path = "services" element = {<Services />} />
        <Route path = "history" element = {<History />} />
        </Route>
        <Route path = "/contact" element = {<Contact />}/>
        <Route path = "*" element = {<Whoop />}/>
      </Routes>
    </div>
  );
}
// Creating Component

// function Header(props){
//   return(
//     <header>
//       <h1>{props.name} Kitchen</h1>
//     </header>
//   );
// }
// function Main(props){
//   return(
//     <section>
//       <p>We serve the most {props.adj}!!</p>
//       <img src ={restr} height = {200} alt = "food image" />
//       <ul style = {{ testAlign: "left" }} >
//         {props.dishes.map((dish) => (
//           <li key = {dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// function Footer(props){
//   return(
//     <section>
//       <h2>Copyright {props.year}</h2>
//     </section>
//   );
// }


// const dishes  = [
//   "Chicken Alapuzz",
//   "Salmon",
//   "Briyani"
// ];

// const disobj = dishes.map((dish, i) => ({id: i, title: dish}));
// console.log(disobj)

// State Lecture


// function App() {
  // const [emotion, setEmotion] = useState("happy");
  // console.log(emotion, setEmotion)
  //UseReducer Lecture
  // const [check, toggle] = useReducer(
  //   (check) => !check,
  //   false
  //   );

  // Fetch Data from API
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(()=> {
  //   if (!login) return;
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/${login}`)
  //   .then((response) => response.json())
  //   .then(setData)
  //   .then(()=>setLoading(false))
  //   .catch(setError);
  // }, [login]);
  // if (loading) return <h1> Loading..</h1>
  // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if (!data) return null;
  // return(
    // <div>
    //   <h1>{data.login}</h1>
    //   <p>{data.location}</p>
    //   <img alt = {data.login} src = {data.avatar_url} height = {200}/>
    // </div>
    // );
  // }
  // return <div>No User Available </div>;
  // return (
    <>
    {/* /* <input type = "checkbox" value = {check} onChange = {toggle} />
    <p>{check ? "checked": "not checked"}</p> */}

    </>

    /* <h1> Current Emotion is {emotion}</h1>
    <button onClick = {()=>setEmotion("Frustrated")}>
    Frustrate
    </button>
    <button onClick = {()=>setEmotion("Horny")}>
    Horny
    </button>
    <button onClick = {()=>setEmotion("Happy Again")}>
    Happy 
    </button> */
    // </>
    // <>
    // {props.authorized ? <SecureComponent />: <RegularComponent /> }
    // </>
  // );
    // <div className="App">
      // <>
          
      // </>

      /* <Header name = "Slilenzo"/>
      <Main adj = "Amazing" dishes = {disobj} />
      <Footer year = {new Date().getFullYear()}/> */
    // </div>
// }

export default App;
