const Button = ({ counter, setCounter }) => {
  const counterPlus = () => {
    setCounter(counter + 1);
  };

  return <button onClick={counterPlus}>Get new random person!</button>;
};

export default Button;
