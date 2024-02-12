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
        description: [
            { title: 'Recipe Submission and Admin Review', text: 'Implemented a user-friendly recipe submission system with admin review, showcasing attention to detail in managing user-generated content'},
            { title: 'Dynamic Recipe Exploration', text: 'Designed an engaging frontend for recipe exploration, including search and filter functionality for faster navigation'},
            { title: 'Smart Shopping Lists', text: 'Engineered algorithmic logic within the various actions of Redux slices for personalized shopping lists managed by global state'},
            { title: 'User Authentication', text: 'Implemented role-based authentication by leveraging NextAuth\'s Providers option, enhancing data security and allowing for admin roles'},
            { title: 'Multi-Table Database', text: 'Utilized PostgreSQL database and Prisma ORM for efficient data management, ensuring scalability and reliability for seamless user experiences'},
            { title: 'Intuitive User Interface', text: 'Showcases a well-designed and intuitive interface emphasizing my focus on user experience, from navigation to visual appeal' },
        ],
        stack: [
            { title: 'Framework', option: 'Next 14' },
            { title: 'Authentication', option: 'NextAuth' },
            { title: 'State Management', option: 'Redux Toolkit' },
            { title: 'Styling', option: 'Tailwind CSS' },
            { title: 'Database', option: 'PostgreSQL with Prisma' },
        ] 
    },
    {
        name: 'NoahLett (This app)',
        deployed: true,
        icon: '/images/black-hole.png',
        link: '#',
        bgColor: '#061441',
        description: [
            { title: 'Brief Overview', text: 'Designed a single-page portfolio application to showcase my expertise, work experience, personal applications, and a means of getting in contact.' },
            { title: 'Full-Stack Integration', text: 'Implementing a robust backend infrastructure with Node.js and Express which will integrate user authentication, CRUD functionality, and the use of MongoDB for data storage' },
            { title: 'Responsive UI/UX', text: 'Included multiple media queries for each component, ensuring a smooth and appealing view independent of breakpoints or choice in device' },
            { title: 'Messaging System', text: 'Implementing a Firebase messaging system, allowing users to seamlessly communicate for negotiating prices, discussing shipping details, and facilitating a smooth exchange process' },
        ],
        stack: [
            { title: 'Framework', option: 'React' },
            { title: 'Styling', option: 'Custom CSS' },
            { title: 'Messaging', option: 'EmailJS' },
        ] 
    },
    {
        name: 'BookWorm 2.0',
        deployed: false,
        icon: '/images/caterpillar.png',
        link: '',
        bgColor: '#add8e6',
        description: [
            { title: 'Component-based Navigation', text: 'Crafting an engaging and responsive user interface using React, which will allow users to view posts, sales, and communicate with other users seamlessly' },
            { title: 'Full-Stack Integration', text: 'Implementing a robust backend infrastructure with Node.js and Express which will integrate user authentication, CRUD functionality, and the use of MongoDB for data storage' },
            { title: 'Responsive UI/UX', text: 'Incorporating Bootstrap for sleek and mobile-friendly styling, enhancing the visual appeal and accessibility of the application' },
            { title: 'User Content CRUD Functionality', text: 'Enabling users to create, update, read, and delete two types of posts - "Book Wanted" and "Book to Sell," fostering a diverse and dynamic marketplace for textbook transactions'},
            { title: 'Efficient State Management', text: 'Utilizing Redux for efficient global state management, ensuring real-time updates and a cohesive user experience throughout the application'},
            { title: 'User Messaging System', text: 'Implementing a Firebase messaging system, allowing users to seamlessly communicate for negotiating prices, discussing shipping details, and facilitating a smooth exchange process' },
        ],
        stack: [
            { title: 'Framework', option: 'React' },
            { title: 'Authentication', option: 'JWT and Bcrypt' },
            { title: 'State Management', option: 'Redux Toolkit' },
            { title: 'Styling', option: 'Bootstrap' },
            { title: 'Database', option: 'MongoDB' },
        ] 
    },
    {
        name: 'BrewBase',
        deployed: true,
        icon: '/images/cheers.png',
        link: 'https://noahlett.github.io/beer-base/#',
        bgColor: '#D3D3D3',
        description: [
            { title: 'Component-based Navigation', text: 'Crafting an engaging and responsive user interface using React, which will allow users to view posts, sales, and communicate with other users seamlessly' },
            { title: 'Full-Stack Integration', text: 'Implementing a robust backend infrastructure with Node.js and Express which will integrate user authentication, CRUD functionality, and the use of MongoDB for data storage' },
            { title: 'Responsive UI/UX', text: 'Incorporating Bootstrap for sleek and mobile-friendly styling, enhancing the visual appeal and accessibility of the application' },
            { title: 'User Content CRUD Functionality', text: 'Enabling users to create, update, read, and delete two types of posts - "Book Wanted" and "Book to Sell," fostering a diverse and dynamic marketplace for textbook transactions'},
        ],
        stack: [
            { title: 'Framework', option: 'JQuery' },
            { title: 'External API', option: 'https://api.punkapi.com/v2/beers' },
            { title: 'Data Fetching', option: 'XHR/XMLHttpRequest' },
            { title: 'Filters', option: 'Custom JS' },
            { title: 'Styling', option: 'Custom CSS' },
            { title: 'User Features', option: 'CRUD' },
        ] 
    },
];