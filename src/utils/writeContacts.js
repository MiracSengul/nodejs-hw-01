import { console } from 'inspector';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'

export const writeContacts = async (updatedContacts) => {
    try{
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf-8');
        console.log("contacts writed successfully");
    }catch(error){
        console.log("an error occured ", error);
    }
};
