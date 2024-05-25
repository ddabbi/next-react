import Link from "next/link";
import HeaderBackground from "./header-background";
import logoImg from "@/public/images/"

export default function Header(){
    return(
        <>
            <HeaderBackground/>
            <header>
                
                    <Link href="/">
                        <img src={logoImg.src} alt="img"/>
                    </Link>
                <nav>
                    <ul>
                        <li><Link href="/blog"/></li>
                        <li><Link href="/about"/></li>
                    </ul>
                </nav>

            </header>
            
        </>  
        
    )
}