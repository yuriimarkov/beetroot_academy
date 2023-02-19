import { Link } from 'react-router-dom'
import {Button }from '../component/button/Button'
import {ImgList} from '../component/ImgList'
export default function Home() {
    return (
        <section className='home'>
            <h2>Home</h2>
            <ImgList img="https://www.pngmart.com/files/12/Bob-Minion-PNG-File.png" />
        </section>
    )
}