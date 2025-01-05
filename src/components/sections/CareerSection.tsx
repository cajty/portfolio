import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../layout/Container';
import { Education } from './Education';
import { Experiences } from './Experiences';

type Tab = 'education' | 'experiences';

interface TabButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`group relative py-2 text-2xl font-bold transition-all duration-300 ${
                isActive
                    ? 'text-neutral-900 dark:text-white'
                    : 'text-neutral-500 dark:text-neutral-400'
            }`}
        >
            <span className="relative z-10 px-1">
                {children}
            </span>

            {/* Active underline */}
            <div
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0'}`}
            />
        </button>
    );
};

export const CareerSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('experiences');
    const [contentHeight, setContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Update content height when content changes
    useEffect(() => {
        if (contentRef.current) {
            const updateHeight = () => {
                if (contentRef.current) {
                    const height = contentRef.current.scrollHeight;
                    setContentHeight(height);
                }
            };

            // Initial height update
            updateHeight();

            // Update height after a short delay to ensure content is rendered
            const timer = setTimeout(updateHeight, 50);

            return () => clearTimeout(timer);
        }
    }, [activeTab]);

    const handleTabChange = (tab: Tab) => {
        if (tab !== activeTab && !isTransitioning) {
            setIsTransitioning(true);
            setActiveTab(tab);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
            <Container>
                <div className="relative max-w-6xl mx-auto">
                    {/* Tabs Navigation */}
                    <nav
                        className="sticky top-0 z-10 flex gap-12 py-6 mb-8 bg-inherit border-b border-neutral-200 dark:border-neutral-700"
                        role="tablist"
                    >
                        <TabButton
                            isActive={activeTab === 'experiences'}
                            onClick={() => handleTabChange('experiences')}
                        >
                            Experiences
                        </TabButton>
                        <TabButton
                            isActive={activeTab === 'education'}
                            onClick={() => handleTabChange('education')}
                        >
                            Education
                        </TabButton>
                    </nav>

                    {/* Content Container with Fixed Height */}
                    <div
                        style={{ height: contentHeight }}
                        className="relative transition-all duration-300 ease-in-out"
                    >
                        {/* Content Wrapper */}
                        <div
                            ref={contentRef}
                            className={`absolute w-full transition-all duration-300 ${
                                isTransitioning
                                    ? 'opacity-0 translate-y-4'
                                    : 'opacity-100 translate-y-0'
                            }`}
                        >
                            {activeTab === 'education' ? <Education /> : <Experiences />}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CareerSection;