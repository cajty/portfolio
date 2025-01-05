import { motion } from 'framer-motion';
import { Code, Database, Globe, Laptop, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
    const socialLinks = [
        { icon: Github, url: 'https://github.com/cajty', label: 'GitHub' },
        { icon: Linkedin, url: 'https://www.linkedin.com/in/ayoub-belyamane-bb28742a7/', label: 'LinkedIn' },
        { icon: Mail, url: 'mailto:Belyamaneayoub1@gmail.com', label: 'Email' }
    ];

    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br
         from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="relative h-full">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-blue-500/5"
                            style={{
                                width: Math.random() * 300 + 50,
                                height: Math.random() * 300 + 50,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                scale: [1, Math.random() + 0.5],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Text Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-4 mb-6"
                        >
              <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                Open to Work
              </span>
                        </motion.div>

                        {/* Main Headline */}
                        <div className="mb-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-2"
                            >
                                Hello, I'm Ayoub 👋
                            </motion.p>
                            <motion.h1
                                className="text-5xl md:text-7xl font-heading font-bold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Full Stack
                                <span className="text-blue-500"> Developer</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Building innovative solutions with Spring, Vue.js, and FastAPI
                            </motion.p>
                        </div>

                        {/* Expertise Areas */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {[
                                { icon: Globe, label: 'Front-end', subtext: 'Vue.js, Tailwind' },
                                { icon: Code, label: 'Back-end', subtext: 'Spring, FastAPI' },
                                { icon: Database, label: 'Database', subtext: 'PostgreSQL, ElasticSearch' },
                                { icon: Laptop, label: 'Tools', subtext: 'Git, Docker' }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors group">
                                    <item.icon className="w-8 h-8 text-blue-500 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                                    <h3 className="font-medium mb-1">{item.label}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.subtext}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100
                                     dark:hover:bg-blue-900 transition-colors group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Photo Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="relative w-80 h-96 rounded-lg overflow-hidden transform transition duration-500 group-hover:scale-105">
                            {/* Frame Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg" />

                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500/20 to-transparent" />

                            {/* Image Container */}
                            <div className="relative h-full p-3">
                                <div className="relative h-full rounded-lg overflow-hidden">
                                    <img
                                        src="../../../public/photo.jpg"
                                        alt="Belyamane Ayoub - Full Stack Developer"
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30
                                     to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Corner Accents */}
                            {[
                                'top-0 left-0 border-t-4 border-l-4',
                                'top-0 right-0 border-t-4 border-r-4',
                                'bottom-0 left-0 border-b-4 border-l-4',
                                'bottom-0 right-0 border-b-4 border-r-4'
                            ].map((position, index) => (
                                <div key={index} className={`absolute w-12 h-12 ${position} border-blue-500 rounded-lg`} />
                            ))}
                        </div>

                        {/* Ambient Glow */}
                        <div className="absolute -inset-4 bg-blue-500/5 rounded-2xl -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;