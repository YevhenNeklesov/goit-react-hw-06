import { useDispatch, useSelector } from "react-redux"
import { deleteContact, selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"
import s from './List.module.css'

const List = () => {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch()
    const searchName = useSelector(selectNameFilter)
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchName.toLowerCase().trim()))


    return (
        <ul className={s.ul}>
            {filteredContacts.map(item => (
                <li className={s.li} key={item.id}>
                    <p className={s.text}>Name: {item.name}</p>
                    <p className={s.text}>Phone: {item.phone}</p>
                    <button className={s.btn} onClick={() => dispatch(deleteContact(item.id))}>Delete contact</button>
                </li>
            ))}
      </ul>

  )
}

export default List