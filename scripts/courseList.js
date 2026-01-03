// --- DATA ---
const SAMPLE_COURSES = [
    {
    id: '1',
    title: 'Personal Protective Equipment (PPE)',
    description: 'Learn the correct selection, use, and maintenance of PPE including hard hats, eye protection, and respiratory gear.',
    image: 'https://picsum.photos/800/600?random=1',
    duration: '15 mins',
    modules: 4,
    level: 'Beginner',
    category: 'Basics',
    badge: { text: 'Mandatory', color: 'danger' }
    },
    {
    id: '2',
    title: 'Fire Safety & Evacuation',
    description: 'Critical protocols for fire prevention, extinguisher types, and emergency evacuation routes in industrial settings.',
    image: 'https://picsum.photos/800/600?random=2',
    duration: '25 mins',
    modules: 6,
    level: 'Intermediate',
    category: 'Emergency',
    badge: { text: 'Updated', color: 'warning' }
    },
    {
    id: '3',
    title: 'Hazardous Material Handling',
    description: 'Advanced guide to handling, storing, and disposing of hazardous chemicals safely according to global standards.',
    image: 'https://picsum.photos/800/600?random=3',
    duration: '45 mins',
    modules: 8,
    level: 'Advanced',
    category: 'Chemicals'
    },
    {
    id: '4',
    title: 'Ergonomics in the Workplace',
    description: 'Prevent repetitive strain injuries (RSI) and back pain through proper lifting techniques and workstation setup.',
    image: 'https://picsum.photos/800/600?random=4',
    duration: '20 mins',
    modules: 3,
    level: 'Beginner',
    category: 'Health',
    badge: { text: 'Trending', color: 'success' }
    },
    {
    id: '5',
    title: 'Lockout/Tagout (LOTO)',
    description: 'Ensure dangerous machines are properly shut off and not able to be started up again prior to the completion of maintenance.',
    image: 'https://picsum.photos/800/600?random=5',
    duration: '30 mins',
    modules: 5,
    level: 'Intermediate',
    category: 'Machinery'
    },
    {
    id: '6',
    title: 'Electrical Safety Awareness',
    description: 'Identify electrical hazards, understand arc flash risks, and learn safe working distances.',
    image: 'https://picsum.photos/800/600?random=6',
    duration: '40 mins',
    modules: 7,
    level: 'Advanced',
    category: 'Electrical',
    badge: { text: 'Hard', color: 'dark' }
    }
];