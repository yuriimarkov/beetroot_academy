
import { Link } from 'react-router-dom'
import {ImgList} from '../component/ImgList'

export default function Contact() {
    return (
        <section className='contact'>
             <h2>Contact</h2>
            <ImgList img="https://i.pinimg.com/originals/c6/d6/82/c6d682c14b3b7ff06f8d1c21583bc6d0.png" />
             <Link to='/' className='button'>To Home</Link>
        </section>
    )
}