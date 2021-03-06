import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import vid from "../assets/naturevid.mp4";

export const FamilyMembers = () => {
  let familymembers = [
    { name: "Sahir", age: 22, id: uuidv4() },
    { name: "Saadat", age: 20, id: uuidv4() },
    { name: "Nazneen", age: 40, id: uuidv4() },
    { name: "Muzammil", age: 48, id: uuidv4() },
  ];

  const [family, setFamily] = useState(familymembers);

  const [nameinput, setNameinput] = useState("");
  const [ageinput, setAgeinput] = useState("");

  function updatenameinput(e) {
    console.log("the name is ", e.target.value);
    setNameinput(e.target.value);
  }
  function updateageinput(e) {
    console.log("the name is ", e.target.value);
    setAgeinput(e.target.value);
  }

  function updatemembers(e) {
    e.preventDefault();

    let newmember = { name: nameinput, age: ageinput, id: uuidv4() };
    setFamily([...family, newmember]);
    setNameinput("");
    setAgeinput("");
  }

  return (
    <>
      <div className="">
        <div className="videodiv">
          <video autoPlay loop muted>
            <source src={vid} type="video/mp4" />
            <source src={vid} type="video/ogg" />
          </video>
        </div>
        <div className="FamilyMemb">
          <h2>Family Members</h2>
          <ul>
            {family.map((member) => (
              <li key={member.id}>
                {member.name} is {member.age}
              </li>
            ))}
          </ul>

          <form action="" onSubmit={updatemembers}>
            <label htmlFor="addmembernameinput">
              Add a member :{" "}
              <input
                type="text"
                name="addmembernameinput"
                value={nameinput}
                onChange={updatenameinput}
              />
            </label>

            <label htmlFor="addmemberageinput">
              age :
              <input
                type="number"
                name="addmemberageinput"
                value={ageinput}
                onChange={updateageinput}
              />
            </label>

            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};
