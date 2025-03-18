
import { Dice5, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-rpg-deep-blue text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Dice5 size={24} className="mr-2" />
            <span className="font-display text-xl">Pedro Takahashi</span>
          </div>
          
          <div className="text-sm text-gray-400">
            <div className="flex items-center justify-center md:justify-end">
              <span>- Developmented with</span>
              <Heart size={14} className="mx-1 text-red-400" fill="#f87171" />
              <span>and React -</span>
            </div>
            <div className="mt-1 text-center md:text-right">
             Full Stack Developer
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-center space-x-6">
          <a 
            href="mailto:pedroh.takahashi@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            Email
          </a>
          <a 
            href="https://github.com/pedrotakahashi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/takahashi-pedro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
