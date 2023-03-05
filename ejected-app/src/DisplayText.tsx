import React, {useState} from "react";

const DisplayText = () => {
    const [txt, setTxt] = useState("")
    const [msg, setMsg] = useState("")
    const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTxt(e.target.value);
    }

    const onClickShowMsg = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
    
        setMsg(`hello in react test, ${txt}!`)
    }
    return (
        <form>
            <div>
                <label>what is your name?</label>
            </div>
            <div>
                <input data-testid="user-in" value={txt} onChange={onChangeTxt} />
            </div>
            <div>
                <button data-testid="input-submit" onClick={onClickShowMsg}>display info</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label>
            </div>
        </form>
    )
}

export default DisplayText

