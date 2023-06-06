import { useState } from 'react';

function MainInput() {

    const [inputValue, setInputValue] = useState('')
    const [btnClassName, setBtnClassname] = useState('')

    function handleClick(e) {
        setInputValue(e.target.value)
        if (e.target.value !== '') {
            setBtnClassname('btn-active');
            console.log('привет')
        } else {
            setBtnClassname('');
        }
    }



    return (
        <div className='main-input__container'>
            My List
            <form onSubmit={(e) => e.preventDefault()} className='main-input__form'>
                <input onChange={handleClick} placeholder='My list' value={inputValue} type='text' className='main-input__input' />
                <button className={`main-input__btn ${btnClassName}`}>+ Add</button>
            </form>
        </div>
    )
}
export default MainInput;









