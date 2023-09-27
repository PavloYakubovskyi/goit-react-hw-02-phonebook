const ContactsFilter = ({ inputValue, handleChange }) => {
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
    </>
  );
};

export default ContactsFilter;
