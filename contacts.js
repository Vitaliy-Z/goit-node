// const fs = require("fs");
// const path = require("path");
import { readFile, writeFile } from "fs/promises";
import { join, sep } from "path";
import { v4 as uuidv4 } from "uuid";

const contactsPath = join("db" + sep + "contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

// console.log(await listContacts());

async function getContactById(contactId) {
  const contacts = await listContacts();

  const finedContact = contacts.find(
    (contact) => contact.id === Number(contactId)
  );

  return finedContact;
}

// console.log(await getContactById(5));

async function removeContact(contactId) {
  const contacts = await listContacts();

  const newContacts = contacts.filter(
    (contact) => contact.id !== Number(contactId)
  );

  try {
    await writeFile(contactsPath, JSON.stringify(newContacts));
    console.log("Contact was deleted");
  } catch (error) {
    throw error;
  }
}

// console.log(await removeContact(5));

async function addContact(name, email, phone) {
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  const contactsList = await listContacts();

  contactsList.push(newContact);

  try {
    await writeFile(contactsPath, JSON.stringify(contactsList));
    console.log("Contact was added");
  } catch (error) {
    throw error;
  }
}
// console.log(await addContact("bbb", "sss", 111));

export { listContacts, getContactById, removeContact, addContact };
