import {React, useState} from "react";
import {BsFillCaretRightSquareFill} from 'react-icons/bs'
import {Link} from "react-router-dom";
import axios from "axios";



function NickName() {
     const [nick, setnick] = useState("");

   const handleChange = event => {
        setnick({ nick: event.target.value });
      }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
          nick: nick
        };
    
        axios.post(`https://localhost:44335/NickName/Create`, nick)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
        
        <input type="text" name="nick" placeholder="Nickname"></input> 
      
        <button type="submit" className="btn btn-primary"> <BsFillCaretRightSquareFill/></button>
        {/* <Link  to="/card"></Link> */}
        </div>
        </form>
    );
}

export default NickName;