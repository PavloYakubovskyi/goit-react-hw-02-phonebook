const ContactForm = ({ addContact }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt.currentTarget.name.value);
    const form = evt.currentTarget;
    addContact(form.name.value, form.number.value);

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label>
          Number
          <input type="tel" name="number" required></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
