// import 'Header' from '.'
import './App.css';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Hamza Hamid",
      email: "hamza@gmail.com"
    },
    {
      id: "2",
      name: "Mohsin",
      email: "jutt@gmail.com"
    },
    {
      id: "3",
      name: "Furqan",
      email: "furqi@gmail.com"
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContacts />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
