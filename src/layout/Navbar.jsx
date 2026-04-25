const navLinks = [
    {href :"#about" , label:"À Propos"},
    {href :"#projects" , label:"Mes Projets"},
    {href :"#experience" , label:"Mon Expérience"},
    {href :"#contact" , label:"Contact"},
];

export const Navbar = () => {
    return (
    <header>
        <nav>
            <a>
                EG<span>.</span>
            </a>
        </nav>

        <div>
            <div>
                { navLinks.map((link, index) =>(
                    <a href={link.href} key={index}>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    </header>);
}