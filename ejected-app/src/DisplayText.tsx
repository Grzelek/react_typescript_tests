import React, {useState} from "react";

const DisplayText = () => {
    const [txt, setTxt] = useState("")
    const [msg, setMsg] = useState("")
    const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTxt(e.target.value);
    }

    const onClickShowMsg = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
    
        setMsg(`witaj na tescie reacta, ${txt}!`)
    }
    return (
        <form>
            <div>
                <label>jak masz na imie chuju?</label>
            </div>
            <div>
                <input data-testid="user-in" value={txt} onChange={onChangeTxt} />
            </div>
            <div>
                <button data-testid="input-submit" onClick={onClickShowMsg}>wyswietl komunikat</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label>
            </div>
        </form>
    )
}

export default DisplayText

