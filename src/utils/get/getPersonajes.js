import { URL } from '../url'
import { checkResponse} from "../checkResponse";
export async function getPersonajes(name,number) {
    console.log(number)
    const response = await fetch(`${URL}/characters?offset=${number}&name=${name}`, {
        
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const res = await response.json();
    console.log(res)
    if (checkResponse(response)) {
        return {response, res};
        }


    
    
    
}