
import { Link } from 'react-router-dom'
import {ImgList} from '../component/ImgList'

export default function Blog() {
    return (
        <section className='blog'>
             <h2>Blog</h2>
            <ImgList img="https://www.pngmart.com/files/12/Bob-Minion-PNG-Photos.png" />
            <Link to='/' className='button'>To Home</Link>
        </section>
    )
}