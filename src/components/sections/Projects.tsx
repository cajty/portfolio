import { Container } from '../layout/Container';
import { motion } from 'framer-motion';
import { useGithubProjects } from '../../hooks/useGithubProjects.ts';
import { ExternalLink, Github } from 'lucide-react';
import { type Repository } from '../../hooks/useGithubProjects.ts';

interface ProjectCardProps {
    project: Repository;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
            <motion.img
                src={project.owner.avatar_url || '/api/placeholder/400/300'}
                alt={project.name}
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            />

            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent
                        flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100
                        transform translate-y-2 group-hover:translate-y-0"
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white text-xl font-bold">
                        {project.name}
                    </h3>
                    <motion.a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Github size={20} />
                    </motion.a>
                </div>

                <p className="text-white/90 text-sm mb-3 line-clamp-2 font-medium">
                    {project.description || 'No description available'}
                </p>

                {project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.topics.slice(0, 3).map((topic: string) => (
                            <span
                                key={topic}
                                className="px-3 py-1 text-xs bg-white/20 hover:bg-white/30
                                        rounded-full text-white font-medium transition-colors"
                            >
                               {topic}
                           </span>
                        ))}
                    </div>
                )}

                <motion.a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm mt-2
                            transition-colors duration-200"
                    whileHover={{ x: 5 }}
                >
                    View Project
                    <ExternalLink size={14} />
                </motion.a>
            </motion.div>
        </motion.div>
    );
}

export function Projects() {
    const { projects, loading, error } = useGithubProjects();

    if (loading) {
        return (
            <section className="py-20 bg-neutral-200/50 dark:bg-neutral-200/5">
                <Container>
                    <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="aspect-[4/3] rounded-xl bg-neutral-300/50 dark:bg-neutral-700/50" />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 bg-neutral-200/50 dark:bg-neutral-200/5">
                <Container>
                    <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
                    <div className="text-center text-red-500 bg-red-100/10 p-4 rounded-lg">
                        {error}
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 bg-neutral-200/50 dark:bg-neutral-200/5">
            <Container>
                <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 6).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Projects;