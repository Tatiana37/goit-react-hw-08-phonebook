import { ImSpinner } from 'react-icons/im';
import s from './Loader.module.css';


export default function Loader() {
    return (
        <div className={s.spinnerBox} role="alert">
            <ImSpinner size="45" className={s.spinner} />
            Loading...
        </div>
    )
}