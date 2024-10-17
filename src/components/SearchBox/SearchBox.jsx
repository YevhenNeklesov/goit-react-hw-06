
import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"
import s from './SearchBox.module.css'

const SearchBox = () => {
    const dispatch = useDispatch()
  return (
      <div className={s.container}>
          <label className={s.label}>Search contact
        <input
          className={s.input}
          placeholder="Enter contact name"
          type="text"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
          </label>
    </div>
  )
}

export default SearchBox