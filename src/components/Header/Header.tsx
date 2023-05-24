import { header } from "../../constants/portfolio"
import Navbar from "../../components/Navbar/Navbar";
import '../../Styles/Header.css'

export default function Header() {
    const {homepage,title} = header
    return (
        <header className='header center'>
            <h3>
                {homepage? (
                <a href={homepage} className="link" target="_blank">
                    {title}
                </a>
                ):(
                    title
                )}
            </h3>
            <Navbar />
        </header>
    );
  }