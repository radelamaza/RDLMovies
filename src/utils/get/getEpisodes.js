import { URL } from '../url'
import { checkResponse} from "../checkResponse";
export async function getEpisodes(tv,numero) {
    console.log('hola')
    const response = await fetch(`${URL}/episodes?series=${tv}`, {
        
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