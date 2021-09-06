import LinkMenu from './LinkMenu';

const Header = ()=>{
    return(
        <div className="header">
            <div className='container'>
                <h1>LOGOTIPO</h1>
                <ul>
                    <li><LinkMenu href="#">Google</LinkMenu></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="https://www.google.com" target="_blank">Link</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;