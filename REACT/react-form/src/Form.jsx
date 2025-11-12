import { useState } from "react";

export default function Form() {
   let [formData, setFormData] = useState({
    name: "",
    username: ""
   });

   let handleInputChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
    console.log(formData);
   }  

   let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({name: "", username: ""});
   }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name" value={formData.name} name="name" onChange={handleInputChange} />
        <label htmlFor="Username">Username</label>
        <input id="Username" type="text" placeholder="Username" value={formData.username} name="username" onChange={handleInputChange} />
        <button type="submit">Submit</button>
    </form>
  )
}