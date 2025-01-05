import { useState } from 'react';
import { Container } from '../layout/Container';
import { motion } from 'framer-motion';
import { Filter, Star } from 'lucide-react';
import SpringIcon from '../public/images_skills/springio-icon.svg';

const skills = [
    {
        name: 'Spring',
        category: 'Backend',
        icon: SpringIcon,
        featured: true
    },
    {
        name: 'Angular',
        category: 'Frontend',
        icon: 'public/images_skills/angular-icon.svg',
        featured: true
    },
    {
        name: 'React',
        category: 'Frontend',
        icon: 'public/images_skills/reactjs-icon.svg',
        featured: true
    },
    {
        name: 'Docker',
        category: 'DevOps',
        icon: 'public/images_skills/docker-icon.svg'
    },
    {
        name: 'Electron',
        category: 'Desktop',
        icon: 'public/images_skills/electronjs-icon.svg'
    },
    {
        name: 'FastAPI',
        category: 'Backend',
        icon: 'public/images_skills/fastapi-icon.svg'
    },
    {
        name: 'Postman',
        category: 'Tools',
        icon: 'public/images_skills/getpostman-icon.svg'
    },
    {
        name: 'Git',
        category: 'Tools',
        icon: 'public/images_skills/git-scm-icon.svg'
    },
    {
        name: 'Java',
        category: 'Backend',
        icon: 'public/images_skills/java-icon.svg'
    },
    {
        name: 'JavaScript',
        category: 'Frontend',
        icon: 'public/images_skills/javascript-icon.svg'
    },
    {
        name: 'Jenkins',
        category: 'DevOps',
        icon: 'public/images_skills/jenkins-icon.svg'
    },
    {
        name: 'Jira',
        category: 'Tools',
        icon: 'public/images_skills/jira-3.svg'
    },
    {
        name: 'Langchain',
        category: 'AI',
        icon: 'public/images_skills/langchain.svg'
    },
    {
        name: 'Laravel',
        category: 'Backend',
        icon: 'public/images_skills/laravel-icon.svg'
    },
    {
        name: 'MySQL',
        category: 'Database',
        icon: 'public/images_skills/mysql-icon.svg'
    },
    {
        name: 'Ollama',
        category: 'AI',
        icon: 'public/images_skills/ollama.svg'
    },
    {
        name: 'PHP',
        category: 'Backend',
        icon: 'public/images_skills/php-icon.svg'
    },
    {
        name: 'PostgreSQL',
        category: 'Database',
        icon: 'public/images_skills/postgresql-icon.svg'
    },
    {
        name: 'Python',
        category: 'Backend',
        icon: 'public/images_skills/python-icon.svg'
    },

    {
        name: 'TailwindCSS',
        category: 'Frontend',
        icon: 'public/images_skills/tailwindcss-icon.svg'
    },
    {
        name: 'Vue.js',
        category: 'Frontend',
        icon: 'public/images_skills/vuejs-icon.svg'
    }
] as const;

const categories = [...new Set(skills.map(skill => skill.category))];

function SkillIcon({ name, icon, featured, index }: {
    name: string;
    icon: string;
    featured?: boolean;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            className={`flex flex-col items-center gap-3 p-6 rounded-xl transition-all shadow-sm hover:shadow-md
                ${featured
                ? 'bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 ring-2 ring-blue-500/20'
                : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'}`}
        >
            <motion.div
                className="w-16 h-16 flex items-center justify-center relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={icon}
                    alt={`${name} logo`}
                    className="w-12 h-12 object-contain"
                />
                {featured && (
                    <Star className="w-4 h-4 text-blue-500 absolute top-0 right-0" />
                )}
            </motion.div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        </motion.div>
    );
}

export function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredSkills = selectedCategory
        ? skills.filter(skill => skill.category === selectedCategory)
        : skills;

    return (
        <section id="skills" className="section py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
            <Container>
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
                        <motion.h2
                            className="text-4xl font-bold text-neutral-900 dark:text-neutral-100"
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Technical Expertise
                            <span className="block text-lg font-normal text-gray-600 dark:text-gray-400 mt-2">
                                Specialized in Spring & Angular Development
                            </span>
                        </motion.h2>

                        <div className="relative">
                            <motion.button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Filter className="w-4 h-4" />
                                <span>{selectedCategory || 'All Skills'}</span>
                            </motion.button>

                            {isFilterOpen && (
                                <motion.div
                                    className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <button
                                        onClick={() => {
                                            setSelectedCategory(null);
                                            setIsFilterOpen(false);
                                        }}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        All Skills
                                    </button>
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setIsFilterOpen(false);
                                            }}
                                            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                        layout
                    >
                        {filteredSkills.map((skill, index) => (
                            <SkillIcon
                                key={skill.name}
                                {...skill}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}