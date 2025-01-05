import React, { useState, useRef, useEffect } from 'react';
import { Container } from '../layout/Container';

const experiences = [
    {
        position: 'DÉVELOPPEUR Full stack ',
        company: 'NOVEC | CDG',
        period: 'du 22 mai au 23 août 2024',
        description: 'Un chatbot basé sur l\'intelligence artificielle (IA) pour fournir des réponses rapides et précises aux collaborateurs de l\'entreprise',
        tasks: [
            'Conception de l\'interface desktop avec Electron',
            'Développement du backend avec FastAPI pour gérer les requêtes et les réponses',
            'Conception et implémentation de bases de données SQL et vectorielles pour améliorer la recherche sémantique et le stockage des informations'
        ],
        technologies: ['Electron', 'FastAPI', 'Ollama (mistral-nemo)', 'LangChain', 'SQL', 'ChromaDB']
    },
    // Add more experiences here if needed
] as const;

const IconLabel: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
        <span className="text-xl" aria-hidden="true">{icon}</span>
        <span>{text}</span>
    </div>
);

const TimelineItem: React.FC<{ item: typeof experiences[number]; isVisible: boolean }> = ({ item, isVisible }) => {
    return (
        <div className={`relative pl-8 pb-12 border-l border-neutral-300 dark:border-neutral-700 last:border-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="space-y-6">
                {/* Header Section */}
                <div className="space-y-2">
                    <div className="flex items-center gap-4 mb-2">
                        <IconLabel icon="💼" text={item.company} />
                        <IconLabel icon="📅" text={item.period} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                        {item.position}
                    </h3>
                </div>

                {/* Project Description */}
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                    <p className="text-neutral-700 dark:text-neutral-300">
                        {item.description}
                    </p>
                </div>

                {/* Tasks Section */}
                <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                        Tâches réalisées
                    </h4>
                    <ul className="space-y-2">
                        {item.tasks.map((task, index) => (
                            <li key={index} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                                <span className="text-blue-500" aria-hidden="true">↗️</span>
                                <span>{task}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies Section */}
                <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                        Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 text-sm bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Experiences: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(experiences.map(() => false));
    const experiencesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                        setVisibleItems(prev => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        const experienceItems = experiencesRef.current?.querySelectorAll('.experience-item');
        experienceItems?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experiences" >
            <Container>

                <div className="max-w-3xl" ref={experiencesRef}>
                    {experiences.map((item, index) => (
                        <div key={item.position} className="experience-item" data-index={index}>
                            <TimelineItem item={item} isVisible={visibleItems[index]} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Experiences;