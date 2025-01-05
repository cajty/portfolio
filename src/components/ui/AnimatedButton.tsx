import { useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function AnimatedButton({ children, href, className = '' }: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  
  const ButtonComponent = motion[href ? 'a' : 'button'];
  
  return (
    <ButtonComponent
      href={href}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
      whileTap={{ 
        scale: 0.98,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className={`
        relative overflow-hidden
        px-6 py-3 rounded-lg
        bg-gradient-to-r from-primary-600 to-primary-400
        text-white font-medium
        transition-all duration-300
        ${className}
      `}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <motion.span
        initial={false}
        animate={{
          y: isPressed ? -20 : 0,
          opacity: isPressed ? 0 : 1,
        }}
      >
        {children}
      </motion.span>
      
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isPressed ? 2 : 0,
          opacity: isPressed ? 1 : 0,
        }}
        style={{ originY: "50%" }}
      />
    </ButtonComponent>
  );
}