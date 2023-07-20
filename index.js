const contacts = require('./contacts');


contacts.listContacts((err, allContacts) => {
  if (err) {
    console.error('Error listing contacts:', err);
    return;
  }
  console.log('All Contacts:', allContacts);
});

contacts.getContactById(1, (err, contact) => {
  if (err) {
    console.error('Error getting contact by ID:', err);
    return;
  }
  console.log('Contact by ID:', contact);
});

contacts.removeContact(2, (err) => {
  if (err) {
    console.error('Error removing contact:', err);
    return;
  }
  console.log('Contact removed successfully.');
});

contacts.addContact('John Doe', 'johndoe@example.com', '123456789', (err, newContact) => {
  if (err) {
    console.error('Error adding contact:', err);
    return;
  }
  console.log('New Contact:', newContact);
});