import useRouter from 'utils/useRouter';
import { useDispatch } from 'react-redux';

export function checkResponse(response) {
    if (response.status==429) {
        alert("Se ha excedido el numero maximo de consultas, intente nuevamente mas tarde")
        window.location.replace('/home')
    } else { return true}
  }
  
  export default checkResponse