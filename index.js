import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

import program from "./lib/commander.js";

program.parse(process.argv);

const action = program.opts().action;
const id = program.opts().id;
const name = program.opts().name;
const email = program.opts().email;
const phone = program.opts().phone;

const argv = {
  action,
  id,
  name,
  email,
  phone,
};

// console.log(argv);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      break;

    case "remove":
      console.log(await removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
