const Person = ({ personData }) => {
  if (personData == null) {
    return null;
  }

  return (
    <ul>
      <li>First name: {personData.name.first}</li>
      <li>Last name: {personData.name.last}</li>
      <li>Email: {personData.email}</li>
    </ul>
  );
};

export default Person;
