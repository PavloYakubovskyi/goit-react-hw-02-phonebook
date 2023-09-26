const ContactsList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </li>
          ))}
        </ul>
      ) : (
        <>contacts is empty</>
      )}
    </>
  );
};

export default ContactsList;
