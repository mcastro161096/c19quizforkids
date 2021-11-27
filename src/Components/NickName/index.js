import { React, useState } from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import "../NickName/nickname.css"

 
function NickName() {
  const [nick, setnick] = useState("");

  const handleChange = (event) => {
    setnick({ nick: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jogador = {
      id: 0,
      nickName: nick,
    };

    axios.post(`https://localhost:5001/api/NickName/`, { jogador }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        
        <input type="text" name="nick" placeholder="Nickname"></input>

        <button type="submit" className="btn btn-primary">
          <BsFillCaretRightSquareFill />
        </button>

        
        <br /><br />

        {/* <Link  to="/card"></Link> */}

        <div className="">
          <Link to="/ranking">
            {" "}
            <button className="btnnick">Acessar Ranking</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default NickName;
