import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

const education = [
    {
        degree: 'Développement Full Stack',
        school: 'YouCode | UM6P, Youssoufia',
        year: '2023 - Present',
        description: 'Advanced full-stack development training focusing on Spring, Vue.js, FastAPI, and modern web technologies.',
    },
    {
        degree: 'Sciences de la Matière Physique',
        school: 'Faculté des Sciences de Rabat',
        year: '2019 - 2021',
        description: 'Studied physics with emphasis on analytical thinking and problem-solving methodologies.',
    },
    {
        degree: 'Baccalauréat en Sciences Physiques',
        school: 'Lycée Allal Al Fassi, Sala Al Jadida',
        year: '2018 - 2019',
        description: 'Foundation in physics and mathematics, developing strong analytical and technical skills.',
    },
] as const;

function TimelineItem({ item }: { item: typeof education[number] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l border-neutral-300 dark:border-neutral-700 last:border-0"
        >
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="space-y-2">
        <span className="inline-block px-3 py-1 text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
          {item.year}
        </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {item.degree}
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    {item.school}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

export function Education() {
    return (
        <section id="education" >
            <Container>


                <div className="max-w-2xl">
                    {education.map((item) => (
                        <TimelineItem key={item.degree} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Education;