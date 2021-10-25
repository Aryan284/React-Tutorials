import React from "react";
import Search from "./components/Search";
import { BiCalendar } from "react-icons/bi";
import AddAppoint from "./components/AddAppoint";
import Appointinfo from "./components/Appointinfo";
import {useState, useEffect, useCallback} from "react";


function App() {
  let [appointlist, setappointlist] = useState([]);
  let [query, setQuery] = useState("");
  let [sortby, setsortby] = useState("petName");
  let [orderby, setorderby] = useState("asc");

  const filterappointlist = appointlist.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase())||
        item.ownerName.toLowerCase().includes(query.toLowerCase())||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) =>{
    let order = (orderby === 'asc') ? 1: -1;
    return (
      a[sortby].toLowerCase() < b[sortby].toLowerCase()
      ? -1 * order: 1 * order
    )
  })



  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setappointlist(data)
    });
  }, [])
  
  useEffect(()=> {
    fetchData()
  }, [fetchData]);
  return (

    <div className = "App container mx-auto mt-3 font-thin">
      <h1 className = "text-5xl mb-3">
      <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1>
      <AddAppoint
      onSendAppointment = {myAppoint => setappointlist([...appointlist, myAppoint])}
      lastid = {appointlist.reduce((max, item) => Number(item.id) > max ? Number(item.id): max, 0)}/>

      <Search query = {query}
      onQueryChange = {myquery => setQuery(myquery)}
      orderby = {orderby}
      onOrderChange = {mysortby => setorderby(mysortby)}
      sortby = {sortby}
      onSortChange = {mysortby => setsortby(mysortby)}
      />

      <ul className="divide-y divide-gray-200">
        {filterappointlist
          .map(appointment => (
            <Appointinfo key = {appointment.id}
            appointment = {appointment}
            onDeleteAppoint = {
              appointmentid =>
              setappointlist(appointlist.filter(appointment=>
                appointment.id !== appointmentid))
            }
          />
            
          ))
        }
      </ul>
    </div>
  );
}

export default App;
