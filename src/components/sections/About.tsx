import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Book, Globe, Users, Lightbulb, GitBranch } from 'lucide-react';
import { Container } from '../layout/Container';
import { useState, useRef } from 'react';

interface SkillCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const skills: SkillCard[] = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Spring, Vue.js, FastAPI, Laravel, and modern web technologies"
    },
    {
      icon: Book,
      title: "Continuous Learning",
      description: "Currently at YouCode | UM6P, expanding development skills"
    },
    {
      icon: Globe,
      title: "Languages",
      description: "Arabic (Native), English (B1), French (B2)"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experience with Agile methodologies and Scrum"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Strong analytical skills and creative solution design"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Proficient with Git and GitHub for code management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
      <section
          ref={containerRef}
          id="about"
          className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 bg-blue-500"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 2,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 200 + i * 100,
                    height: 200 + i * 100,
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                  }}
              />
          ))}
        </div>

        <Container className="relative z-10">
          <motion.div
              style={{ opacity, y }}
              className="space-y-12"
          >
            {/* Header */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
              <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold"
              >
                About Me
              </motion.h2>
              <motion.div
                  variants={itemVariants}
                  className="w-20 h-1 bg-blue-500 mx-auto rounded-full"
              />
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-8"
              >
                {/* About Text */}
                <motion.div
                    variants={itemVariants}
                    className="prose dark:prose-invert max-w-none space-y-4"
                >
                  <p className="text-lg md:text-xl leading-relaxed">
                    I'm a passionate Full Stack Developer with expertise in building modern web applications
                    and enterprise solutions. My journey in software development began with a strong foundation
                    in physics, which helps me approach complex problems with analytical precision.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Currently pursuing Full Stack Development at YouCode | UM6P, I specialize in creating
                    scalable applications using Spring, Vue.js, and FastAPI. My recent work includes developing
                    an AI-powered chatbot and building secure banking systems.
                  </p>
                </motion.div>

                {/* Quick Facts */}
                <motion.div
                    variants={itemVariants}
                    className="space-y-6"
                >
                  <h3 className="text-xl md:text-2xl font-semibold">Quick Facts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { emoji: "🌍", text: "Based in Salé, Morocco" },
                      { emoji: "💼", text: "Open to new opportunities" },
                      { emoji: "🎓", text: "Physics Background" },
                      { emoji: "🤖", text: "AI Enthusiast" },
                      { emoji: "🚀", text: "Project-driven learner" },
                      { emoji: "🤝", text: "Team Collaborator" }
                    ].map((fact, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm
                               shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <span className="text-2xl">{fact.emoji}</span>
                          <span className="text-base md:text-lg">{fact.text}</span>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Skills Grid */}
              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer
                    backdrop-blur-sm transform-gpu
                    ${activeCard === index
                            ? 'bg-blue-500 text-white shadow-lg scale-105'
                            : 'bg-white/80 dark:bg-neutral-800/80 hover:bg-blue-50 dark:hover:bg-neutral-700/80'
                        }`}
                        onMouseEnter={() => setActiveCard(index)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                      {/* Card Background Animation */}
                      <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                          animate={{
                            opacity: activeCard === index ? 1 : 0,
                            scale: activeCard === index ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                      />

                      {/* Card Content */}
                      <div className="relative z-10">
                        <skill.icon
                            className={`w-8 h-8 mb-4 transition-colors duration-300
                        ${activeCard === index ? 'text-white' : 'text-blue-500'}`}
                        />
                        <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                        <p className={`text-sm transition-colors duration-300
                      ${activeCard === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
  );
}

export default About;