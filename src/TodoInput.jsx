import { useState } from "react"

export default function TodoInput({onSubmit}) {
    const [inputValue ,setInputvalue] = useState('');
    function onFormSubmit(e) {
        e.preventDefault();
        onSubmit?.(inputValue);
        setInputvalue('');
    }
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Add your todos here"
                    onChange={(event) => {setInputvalue(event.target.value)}}
                    value={inputValue}
                />
                <button>Add todo</button>
            </form>
        </>
    )
}