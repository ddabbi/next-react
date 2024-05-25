import Link from "next/link";

export default function AboutPage(){
    return(
        <header>
            
            <nav>
                <ul>
                    <li><Link href="/blog"/></li>
                    <li><Link href="/about"/></li>
                </ul>
            </nav>

        </header>
    )
}