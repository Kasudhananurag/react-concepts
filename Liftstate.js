import React,{ useState } from 'react'

const Liftstate = (props) => {
    const [name,setName] = useState("");
    const hs =(e) =>{
        e.preventDefault();
        props.getname(name)
    }
    return (
        <div>
            <form onSubmit={hs} >
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Liftstate
