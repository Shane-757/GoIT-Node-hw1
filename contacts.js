const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts(callback) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    const contacts = JSON.parse(data);
    callback(null, contacts);
  });
}

function getContactById(contactId, callback) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId);
    callback(null, contact);
  });
}

function removeContact(contactId, callback) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    let contacts = JSON.parse(data);
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2), 'utf8', (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

function addContact(name, email, phone, callback) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    let contacts = JSON.parse(data);
    const newContact = { id: contacts.length + 1, name, email, phone };
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), 'utf8', (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, newContact);
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
};