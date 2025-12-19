import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try{
        const data = await readContacts();
        const parseData = JSON.parse(data);

        if(parseData.length === 0){
            console.log("There is no data in this file")
            return;
        }

        parseData.pop();

        writeContacts(parseData);
    }catch(error){
        console.log("error", error);
    }
};

removeLastContact();
