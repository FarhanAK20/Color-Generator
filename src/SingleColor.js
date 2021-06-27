import React,{useState,useEffect} from 'react'

const SingleColor=({rgb,weight,index,hexColor})=>{
    const [alert,setAlert] = useState(false);
    const bcg = rgb.join(',')
    const hex = `#${hexColor}`
    useEffect(() => {
        const timeout = setTimeout(()=>{
            setAlert(false)
        },1500)
        return ()=> clearTimeout(timeout)
    }, [alert])
    const handleClick=()=>{
        setAlert(true);
        navigator.clipboard.writeText(hex)
    }
    return (
        <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={handleClick}>
            <p className="percent-value">{weight}%</p>
            <p className="value">{hex}</p>
            {alert && <p className="alert">Copied to clipboard</p>}
        </article>
    );
}

export default SingleColor;