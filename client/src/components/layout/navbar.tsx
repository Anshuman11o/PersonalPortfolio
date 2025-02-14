import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link href={href}>
      <Button
        variant="link"
        className={`p-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
      >
        {children}
      </Button>
    </Link>
  );
};

const NavLinks = () => (
  <>
    <NavLink href="/">About</NavLink>
    <NavLink href="/projects">Projects</NavLink>
    <NavLink href="/experience">Experience</NavLink>
  </>
);

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    <a href="https://github.com/Anshuman11o" target="_blank" rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors">
      <FaGithub className="h-5 w-5" />
    </a>
    <a href="http://linkedin.com/in/anshuman-agarwal-9071931b6" target="_blank" rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors">
      <FaLinkedin className="h-5 w-5" />
    </a>
    <a href="mailto:agarwal.anshuman1@gmail.com"
      className="text-muted-foreground hover:text-primary transition-colors">
      <MdEmail className="h-5 w-5" />
    </a>
  </div>
);

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Button variant="link" className="mr-6 p-0">
            <Link href="/">
              <span className="font-bold">Portfolio</span>
            </Link>
          </Button>
          <nav className="flex items-center space-x-6">
            <NavLinks />
          </nav>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <nav className="flex flex-col gap-4">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        ) : null}

        <div className="flex flex-1 items-center justify-end">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}