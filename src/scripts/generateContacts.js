import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import fs from 'fs/promises';

const generateContacts = async (number) => {
    try{
        const data =await readContacts();
        
        const dataString = JSON.parse(data);

        for(let i=0; i<number; i++){
            dataString.push(createFakeContact());
        }

        writeContacts(dataString);
    }catch(error){
        console.error("Error" ,error)
    }
};

generateContacts(5);
