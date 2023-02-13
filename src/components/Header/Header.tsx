import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import headerStyle from "./Header.module.css"
import Image from "next/image";
import logo from "../../../public/logo.png"

const Header = ({children}) => {
    return ( 
        <>
        <div className={headerStyle.container}>
            <div className={headerStyle.main}>
                <Link className={headerStyle.logo} href="/">
                    <Image 
                    src={logo} 
                    width="35"
                    height="35"
                    alt="logo"/>
                </Link>
                <SearchBar />
            </div>
            <nav className={headerStyle.userNav}>
                <Link style={{ textDecoration: 'none' }} href="#"><div className={headerStyle.signup}>Sign-up</div></Link>
                <Link style={{ textDecoration: 'none' }} href="#"><div className={headerStyle.login}>Log-in</div></Link>
            </nav>
        </div>
        {children}
        </>
     );
}
 
export default Header;