export const EachProjectData = [
    {
        id: 1,
        title: "Real-time Chat App",
        outline: "This is a personal project that I specifically created for my portfolio. I independently developed the entire application, designing the UI and database, as well as coding both the front-end and back-end. This app was developed using the PERN Stack (PostgreSQL, Express.js, React, Node.js) and Socket.io to enable real-time functionality.",
        device: "/pc_chatapp.png",
        subtitle: "From concept to deployment, this real-time chat app epitomizes my end-to-end development capabilities, showcasing proficiency in front-end design, back-end logic, and seamless integration of technologies.",
        poster: "/poster_chatapp.jpg",
        video: "/ChatAppp.mp4",
        about: [
            "I've meticulously designed and developed this app to showcase my full-stack capabilities. With a passion for creating seamless user experiences, I crafted this chat app from the ground up, building the front-end using React for its intuitive interface and dynamic interactions. On the back-end, I leveraged the powerful combination of PostgreSQL, Express, Node.js, and incorporated Socket.IO for real-time messaging capabilities. To ensure secure user interactions, I implemented JWT (JSON Web Token) authentication, providing a robust authentication system. For seamless communication with the PostgreSQL database, I utilized Knex, a query builder for Node.js.",
            "This application allowed me to demonstrate my proficiency in both front-end design and back-end logic, as I meticulously coded every aspect, from the sleek UI to the efficient database interactions. I'm proud to present this project as an example of how my skills can be utilized to create efficient, secure, and user-friendly applications."
        ],
        stacks: [
            "Front-end : React JS, Socket.io",
            "Back-end : Node JS, Express, PostgreSQL, Socket.io"
        ]
    },
    {
        id: 2,
        title: "Lecturers' Archive System",
        outline: "One of my main projects in my previous internship. I developed the whole front-end (React-Next JS, TypeScript) and a little part of back-end, that is the OCR feature using Tesseract, Python Regex, and Flask.",
        device: "/laptop_web_lecturers.png",
        subtitle: "This is my previous internship’s project. I developed the whole front-end and also work on a little part of the backend, which is the OCR and autofill features.",
        poster: "/poster_web_lecturers.jpg",
        video: "/Lecturers_Archivee.mp4",
        about: [
            "This website is designed to store archive documents of all lecturers in the Informatics Department at Hasanuddin University. Lecturers and admins can easily view, upload, edit, and delete their respective documents. Additionally, certain data menus implement OCR (Optical Character Recognition) technology, which extracts text from the uploaded documents. The extracted text is then processed using a custom Regex algorithm that I've developed through extensive experiments and research with various cover formats.",
            "Another standout feature is the CV generator, enabling users to effortlessly generate their CV based on their data in the system. The CVs are produced in .docx format, providing users with the flexibility to further customize their CV according to their preferences. The CV generator, along with the (Laravel) backend, was developed by my partner.",
            "The website caters to 2 main user roles: lecturers and admins. For admins, the provided table data encompasses information from all lecturers. Additionally, admins have access to additional data menus, including their personal archives and students' contests data."
        ],
        stacks: [
            "Front-end : React-Next JS, TypeScript",
            "Back-end (OCR) : Flask, Python, Tesseract"
        ]
    },
    {
        id: 3,
        title: "Students' Archive System",
        outline: "Also my main projects in previous internship. This website is user-friendly and wholly responsive.",
        device: "/laptop_web_students.png",
        subtitle: "This website, along with Lecturers' Archive System (both desktop and mobile interface), are my projects at my previous internship at Informatics Department, Hasanuddin University",
        poster: "/poster_web_students.jpg",
        video: "/Students_Archivee.mp4",
        about: [
            "This website is designed to store contest data for all students in the Informatics Engineering department at Hasanuddin University. The contest data includes the name of the contest, the organizer, dates, documentation submitted by students, and their certificates.",
            "Students access this website through the Unhas SSO (Single Sign-On) for secure login. The data uploaded by students can be viewed by administrators on their dedicated admin website."
        ],
        stacks: [
            "Front-end : React-Next JS, TypeScript"
        ]
    }, 
    {
        id: 4,
        title: "CAREWE' (RT/RW Information System)",
        outline: "My current freelance project. This website will be used for RTs to send their monthly reports to RW. Users are identified based on their unique pins, granting them access to role-specific UI and functionality. RTs can conveniently submit their monthly reports, while RWs can review and manage the submitted reports. The platform ensures a secure and distinct user experience, tailoring the interface and features to meet the needs of each role effectively.",
        device: "/hp_carewe.png",
        subtitle: "",
        poster: "/poster_carewe.png",
        video: "/CareweFinn.mp4",
        about: [
            "This website has two user roles: RT and RW. RT users will fill out the monthly reports, while RW users will have the ability to check their submitted reports. Additionally, both roles can access the report histories, which display the points obtained and the status of incentives.",
            "Furthermore, we are developing a desktop version specifically for the admin role. The main dashboard will provide an overview to monitor all RT reports from all RW users, display the latest submitted reports, and track the progress of each report."
        ],
        stacks: [
            "Front-end: React-Next JS, TypeScript"
        ]
    }
]