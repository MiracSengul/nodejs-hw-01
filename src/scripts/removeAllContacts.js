import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        writeContacts([]);
    } catch (error) {
        console.error('Something went wrong', error);
    }
};

removeAllContacts();
