import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//to make notifactio to any componentet
const notify = (message,type) => {
    if (type === 'warn'){
        toast.warn(message);
    } else if(type === 'success'){
        toast.success(message);
    } else if(type === 'error'){
        toast.error(message);
    }
}

export default notify;