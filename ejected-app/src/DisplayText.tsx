import React, {useState, FC} from "react";

interface DisplayTextprops{
    getUserFullname: (username: string) => Promise<string>
}

const DisplayText: FC<DisplayTextprops> = ({getUserFullname}) => {
    const [txt, setTxt] = useState("")
    const [msg, setMsg] = useState("")
    const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTxt(e.target.value);
    }

    const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
    
        setMsg(`hello in react test, ${await getUserFullname(txt)}!`)
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

