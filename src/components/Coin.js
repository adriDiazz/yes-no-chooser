import React, {useState} from 'react'
import '../styles/container.css'
import coingif from '../assets/coin.gif'
import background from '../assets/background.jpeg'
import Modal from './/Modal'

const Coin = () => {
    const [coin, setCoin] = useState(false)
    const [modal, setModal] = useState(false)
 
    const handleClick = () => {
        setCoin(!coin)
        setTimeout(() => {
            setCoin(false)
            setModal(true)
        }, 2000)   
    }


    return (
        <>
        {
            modal ? <Modal setModal={setModal}/> :  null
        }
        <div className="container" style={
            {
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
            }
        }>
            <div className="chooser">
                <div className="coin">
                    <h1 className='title'><span className='cointext'>Coin</span> chooser</h1>
                    <img src={coingif} alt="coin" className={`tam ${coin ? 'visible' : 'coingif'}`}/>
                    <button className='btn' onClick={handleClick}>Choose</button>
                </div>
            </div>
        </div>
        </>
    )
}
    
export default Coin