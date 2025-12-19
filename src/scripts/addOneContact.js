import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await readContacts();
        const newData = JSON.parse(data);
    
        newData.push(createFakeContact());
    
        writeContacts(newData);
      } catch (error) {
        console.error('Something went wrong', error);
      }
};

addOneContact();
