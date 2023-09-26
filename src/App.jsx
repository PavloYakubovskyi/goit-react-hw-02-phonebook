import { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactsForm/ContactsForm";
import ContactsList from "./components/ContactsList/ContactsList";
import { nanoid } from "nanoid";

class App extends Component {
  state = { contacts: [], name: "", number: "" };

  addContact = (name, number) => {
    // console.log(name);
    const newContact = { id: nanoid(), name, number };
    console.log(newContact);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
