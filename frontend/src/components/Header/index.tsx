import { Link } from 'react-router-dom'
import './styles.css'

function Header() {

    return (
        <>
            <header>
                <div >
           <nav>
                <ul>
                    <ol> <Link to='/'>Home</Link></ol>
                    <ol> <Link to='/author'>Autores</Link></ol>
                    <ol><Link to='/book'>Livros</Link></ol>
                </ul>
           </nav>
                </div>
            </header>  
        </>
    )

}

export default Header
