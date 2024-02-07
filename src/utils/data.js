export const STACK = [
    {
        title: 'Frontend',
        icon: '/images/designer.png',
        skills: [
            { skill: 'React', percentage: '85%' },
            { skill: 'Next 14', percentage: '72%' },
            { skill: 'Redux', percentage: '75%' },
            { skill: 'JavaScript/JQuery', percentage: '80%' },
            { skill: 'Tailwind CSS', percentage: '75%' },
            { skill: 'CSS3', percentage: '85%' },
            { skill: 'HTML5', percentage: '85%' },
        ],
    },
    {
        title: 'Backend',
        icon: '/images/server.png',
        skills: [
            { skill: 'Node', percentage: '80%' },
            { skill: 'Express', percentage: '80%' },
            { skill: 'PostgreSQL', percentage: '75%' },
            { skill: 'Prisma ORM', percentage: '72%' },
            { skill: 'MongoDB', percentage: '80%' },
            { skill: 'Python', percentage: '40%' },
            { skill: 'PHP', percentage: '25%' },
        ],
    },
    {
        title: 'Tools',
        icon: '/images/setting.png',
        skills: [
            { skill: 'Github', percentage: '80%'},
            { skill: 'Figma', percentage: '75%' },
            { skill: 'VSCode', percentage: '80%'},
            { skill: 'NextAuth', percentage: '77%'},
            { skill: 'JWT', percentage: '75%'},
            { skill: 'Webpack', percentage: '70%'},
            { skill: 'Babel', percentage: '65%' }
        ],
    },
    {
        title: 'Soft Skills',
        icon: '/images/team.png',
        skills: [
            { skill: 'Interpersonal Communication', percentage: '92%' },
            { skill: 'Working in Teams', percentage: '90%' },
            { skill: 'Problem-Solving', percentage: '85%' },
            { skill: 'Work Ethic', percentage: '90%' },
            { skill: 'Desire to Learn', percentage: '95%' },
            { skill: 'Attention to Detail', percentage: '80%' },
            { skill: 'Discipline', percentage: '90%' },
        ],
    },
];

export const EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'Sports Warehouse, Inc.',
        location: 'San Luis Obispo, CA',
        date: 'May 2023 - Present',
        responsibilities: [
            'Revamped Tennis and Pickleball Warehouses\' customer service portals using JavaScript and Bootstrap, enhancing user experience, navigation, and functionality.',
            'Collaborated cross-functionally to modularize Sports Warehouse\'s promotional emailing framework, working with Graphics and Digital Marketing teams.',
            'Implemented a dynamic product category filtering system within a React application, leveraging PHP to generate minified JSON, which significantly enhanced filtering capabilities.',
        ],
    },
    {
        title: 'Full-Stack Development Intern',
        company: 'Letter Perfect Properties',
        location: 'Mission Viejo, CA',
        date: 'March 2023 - May 2023',
        responsibilities: [
            'Assisted in elevating the user experience of an internal-use property management application by aiding in the creation of responsive and state-driven React frontend components',
            'Contributed to a secure RESTful API in Node/Express, seamlessly unifying user account creation, login functionality, and the secure storage of profile data',
            'Aided in the implementation of a Redux store and various slices associated with the user login functionality',
        ],
    },
    {
        title: 'Realtor & Escrow Professional',
        company: 'Atlas Title Company',
        location: 'Irvine, CA',
        date: 'September 2020 - October 2022',
        responsibilities: [
            'Established and led the Payoffs Department at the startup, providing comprehensive training to team members in loan servicing data acquisition.',
            'Seamlessly coordinated with others on a twelve-person team, forming a highly-efficient escrow closing process',
            'Successfully managed a high-profile lender account, overseeing the end-to-end closing process for hundreds of refinance and home equity loans.',
        ],
    },
];

export const PROJECTS = [
    {
        name: 'CooksCabinet',
        deployed: true,
        icon: '/images/chef-hat.png',
        link: 'https://cookscabinet.vercel.app',
        bgColor: '#FF7F7F',
        stack: [
            { framework: 'Next 14'},
            { authentication: 'NextAuth' },
            { stateManagement: 'Redux Toolkit' },
            { styling: 'Tailwind CSS' },
            { database: 'PostgreSQL with Prisma' },
        ] 
    },
];