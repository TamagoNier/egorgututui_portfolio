import { Button } from "@/components/Button";

export const Egor = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
            <img src="/bg.png" alt="Egor Background Image" 
            className="w-full h-full object-cover opacity-40 blur-xs"/>
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-secondary/0 via-secondary/10 to-secondary/20"></div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="animate-fade-in animation-delay-100">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary">
                            <span className="w-2 h-2 bg-secondary rounded-full"/>
                            Developpeur Web et Futur Ingénieur
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                            Autonome, Curieux et Passionné.
                        </h1>
                        <p className="text-lg text-muted-primary max-w-lg animate-fade-in animation-delay-300">
                            Bonjour, je suis Egor, un développeur web passionné et futur ingénieur en informatique et multimédia. 
                            Je cherche a contribuer à des projets innovants et à apprendre de nouvelles technologies pour créer des expériences ayant un vrai impact dans la vie de mes utilisateurs.
                            Mes technologies de coeur étant : PHP et ses frameworks (Symfony, Laravel), JavaScript (React, Node.js), Java et C#.                             
                        </p>
                    </div>

                    <div className="animate-fade-in animation-delay-500">
                        <Button size="lg" className="hover:bg-secondary/80 hover:text-primary">
                            <img src="/icons/floppy-disk.png" alt="CV Icon" className="w-5 h-5 mr-2"/>
                            Télécharger mon CV 
                        </Button>
                    </div>
                    {/* social links */}
                    <div className="flex gap-4 animate-fade-in animation-delay-600">
                        Suivez-moi sur :
                        {[
                            { href: "https://github.com/TamagoNier", icon: "/icons/github.png" },
                            { href: "https://www.linkedin.com/in/egor-gututui-8793b8262/", icon: "/icons/linkedin.png" },
                        ].map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                <img src={link.icon} alt={`${link.href} Icon`} className="w-6 h-6"/>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="z-10 animation-delay-400 animate-fade-in">
                    <img src="pp.jpeg" alt="Egor Profile Pic" className="rounded-lg"/>
                </div>
            </div>
        </div>
    </section>);
}