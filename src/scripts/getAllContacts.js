import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        return JSON.parse(contacts);
    } catch (error) {
        console.error("Something went wrong", error);
    }
};

console.log(await getAllContacts());
