import './index.scss'
import { useState, createContext } from 'react';
import TaskList from './components/TaskList';
import { Context } from './components/Context';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [lists, setLists] = useState([]);
  const [disableBtn, setDisableBtn] = useState(true);
  const [context, setContext] = useState("default context value");

  function handleChange(e) {
    setInputValue(e.target.value)
    setDisableBtn(e.target.value.trim() === '')

  }

  function handleSubmit(e) {
    e.preventDefault()
    setInputValue('')
    setDisableBtn(true)
    setLists([...lists, {
      id: crypto.randomUUID(),
      value: inputValue,
      active: false,
      tasks: []
    }]);

  }
  return (
    <Context.Provider value={[context, setContext]}>
      <div className='main-input__container'>
        My List
        <form onSubmit={handleSubmit} className='main-input__form'>
          <input onChange={handleChange} placeholder='New list' value={inputValue} type='text' className='main-input__input' />
          <button disabled={disableBtn} className={`main-input__btn ${disableBtn ? '' : 'btn-active'}`}>+ Add</button>
        </form>
        {lists.map((list) => { return (<TaskList key={list.id} list={list} lists={lists} setLists={setLists} />) })}
      </div>
    </Context.Provider>
  );
}

export default App;
