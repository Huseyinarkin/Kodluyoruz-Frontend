import {useState} from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()))
  })
  console.log("fiter", filtered)

  return (
    <div>
      <input placeholder='Filter contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
      <ul className='list'>
        {filtered.map((contacts, i)=>(
          <li key={i}>
            <span>{contacts.fullname}</span>
            <span>{contacts.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total contacts ({filtered.length})</p>
    </div>
  )
}

export default List