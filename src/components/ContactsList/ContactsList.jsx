import ContactsItem from "../ContactsItem/ContactsItem";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactsItem
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      ) : (
        <>contacts is empty</>
      )}
    </>
  );
};

export default ContactsList;
