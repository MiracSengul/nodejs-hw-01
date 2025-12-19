import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
    try{
        const data = fs.readFile(PATH_DB, 'utf-8');
        return data;
    }catch(error){
        console.error('An Error Occurred', error);
    }
};
