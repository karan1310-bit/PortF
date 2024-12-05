import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/karan-singh-bhati-2b4888316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://github.com/karan1310-bit", icon: <FaGithub /> },
  { href: "https://www.instagram.com/bhati_.01/?igsh=Z3VyZjlpYjh5Znc2#", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          @K 2024.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-black"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;