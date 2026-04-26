import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navLinks = [
    {href :"#about" , label:"À Propos"},
    {href :"#projects" , label:"Mes Projets"},
    {href :"#experience" , label:"Mon Expérience"},
    {href :"#contact" , label:"Contact"},
];

export const Navbar = () => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    return (
    <header className="fixed top-0 left-0 right-0 *:bg-transparent py-0">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                EG.
            </a>


            {/**
             * Desktop Menu
             */}
            <div className="hidden md:flex items-center gap-1 case">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    { navLinks.map((link, index) =>(
                        <a href={link.href} key={index} 
                        className="px-4 py-2 text-sm hover:text-primary rounded-full hover:bg-secondary">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="hidden md:flex">
                <Button size="sm">Contectez Moi</Button>
            </div>

            <button className="flex md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu size={24} />}
            </button>
        </nav>

        {isMobileMenuOpen && ( 
            <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                { navLinks.map((link, index) =>(
                    <a href={link.href} key={index} 
                    className="text-lg text-muted-frontground hover:text-primary py-2">
                        {link.label}
                    </a>
                ))}

                <Button size="sm">Contectez Moi</Button>
            </div>
        </div>
    )}

    </header>);
}