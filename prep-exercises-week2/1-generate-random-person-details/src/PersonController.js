import { useState, useEffect } from "react";
import Person from "./Person";
import Button from "./Button";

const PersonController = () => {
  const [person, setPerson] = useState(null);
  const [counter, setCounter] = useState(0);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      const {name, email} = data.results[0];
      setPerson({name, email});
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getPerson();
  }, [counter]);

  return (
    <div>
      <Person personData={person} />
      <Button counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default PersonController;
