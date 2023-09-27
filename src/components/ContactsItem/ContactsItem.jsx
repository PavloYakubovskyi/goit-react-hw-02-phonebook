import { AiFillDelete } from "react-icons/ai";

const ContactsItem = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <>
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => deleteContact(id)}>
          <AiFillDelete />
        </button>
      </li>
    </>
  );
};

export default ContactsItem;
