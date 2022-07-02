import React, {useEffect, useState} from "react"
import gifNo from '../assets/gg.gif'
import gifYes from '../assets/nice.gif'

const Modal = ({setModal}) => {
    const [result, setResult] = useState('')
    const posibilities = ['Yes', 'No']

    const handleClose = () => {
        const random = Math.floor(Math.random() * posibilities.length)
        console.log(random)
        setResult(posibilities[random])
    }

    useEffect(() => {
        handleClose()
    }, [])

    return(
        <div className="modal-container">
                    <div className="modal">
                        <div className='modal-content'>
                            <h1 className="result-text">{result}</h1>
                            <img src={result === 'No' ? gifNo : gifYes} alt="coin" className="tam"/>
                            <button onClick={() => setModal(false)} className='btn'>❌</button>
                        </div>
                </div>
            </div> 
    )
}

export default Modal