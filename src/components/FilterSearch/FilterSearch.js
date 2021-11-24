
import { useDispatch, useSelector } from 'react-redux';
import s from './FilterSearch.module.css';
import { filterContact } from '../../redux/Contacts/contact-actions';
import { getFilter } from '../../redux/Contacts/contacts-selectors';



function FilterSearch() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <div className={s.filter}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={value}
        onChange={(e)=>dispatch(filterContact(e.target.value))}
      />
    </div>
  );
}


export default FilterSearch;

