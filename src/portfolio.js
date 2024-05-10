/* Change this file to edit the Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mahin Arafath's Portfolio",
  description:
    "A passionate individual thrives to research in line between Data Science and AI towards future technology development and generating multiple bridge application for civilization.",
  og: {
    title: "Mahin Arafath's Portfolio",
    type: "website",
    url: "http://mhnarfth.gihub.io/",
  },
};

//Home Page
const greeting = {
  title: "M A U Shariff",
  logo_name: "",
  nickname: "Mahin",
  subTitle:
    "Fuelled by Passion, Driven by Innovation: Embracing the Intersection of Data Science and Artificial Intelligence. With a relentless Zeal for Exploration: Navigating the Boundless Frontiers of Technology, Weaving Together the Threads of Machine Learning to Forge Solutions for Real-World Challenges. Join me on a Journey of Discovery and Creation, Where Every Line of Code Tells a Story of Transformation and Possibility.",

  resumeLink:
    "https://drive.google.com/file/d/15i9kLnyCwZXwc6KOzNPQ9yJuwjQ16nfx/view?usp=sharing",
  portfolio_repository: "https://github.com/mhnarfth/mhnarfth.github.io",
  footer_display_name: "Mahin Arafath",
};

const socialMediaLinks = [
  /* my Social Media Link */
  // github: "https://github.com/mhnarfth",
  // linkedin: "https://www.linkedin.com/in/mhnarfth/",
  // gmail: "maushariff@outlook.com",
  // gitlab: "https://gitlab.com/mhnarfth",
  // facebook: "https://www.facebook.com/mhnarfth/",
  // twitter: "https://twitter.com/mhnarfth",
  // instagram: "https://www.instagram.com/mhnarfth/"

  {
    name: "Github",
    link: "https://github.com/mhnarfth",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mhnarfth/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:maushariff@outlook.com",
    fontAwesomeIcon: "far fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/mhnarfth",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mhnarfth",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mhnarfth",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable models for various use cases using deep learning and machine learning",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Experience of working in Computer Vision and Audio on Signal Processing projects",
        "⚡ Collaborating on interdisciplinary projects to explore the intersection of AI with other domains",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            //backgroundColor: "white",
            // color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            backgroundColor: "transparent",
            color: "#F9AB00",
            fontSize: "58px",
          },
        },
      ],
    },

    {
      title: "R1 Researcher",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Demonstrated a systematic understanding of a field of study and mastery of research associated with that field",
        "⚡ Proficient in critical analysis, evaluation, and synthesis of novel and intricate concepts",
        "⚡ Articulating research findings and their significance effectively to fellow researchers",
        "⚡ Developed integrated language, communication and environment skills, especially in an international context",
      ],
      softwareSkills: [
        {
          skillName: "Google Scholar",
          fontAwesomeClassname: "simple-icons:googlescholar",
          style: {
            color: "#4285F4",
            fontSize: "55px",
          },
        },
        {
          skillName: "LateX",
          fontAwesomeClassname: "cib:latex",
          style: {
            color: "#008181",
            fontSize: "55px",
          },
        },
        {
          skillName: "Mendeley",
          fontAwesomeClassname: "simple-icons:mendeley",
          style: {
            color: "#A81A26",
            fontSize: "55px",
          },
        },

        {
          skillName: "IEEE ACM",
          fontAwesomeClassname: "logos:ieee",
          style: {
            color: "#12689B",
            fontSize: "45px",
          },
        },
        {
          skillName: "Elsevier",
          fontAwesomeClassname: "simple-icons:elsevier",
          style: {
            //color: "#336791",
          },
        },
        {
          skillName: "Evernote",
          fontAwesomeClassname: "cib:evernote",
          style: {
            color: "#00A82D",
            fontSize: "47px",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Crafting responsive website front ends with React-Redux for seamless user experiences",
        "⚡ Developing robust application backends using Node.js and Express framework for efficient functionality",
        "⚡ Integrating websites with diverse AI technologies to enhance functionality and user interaction",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "logos:express",
          style: {
            color: "#339933",
            fontSize: "35px",
          },
        },
        {
          skillName: "React Router",
          fontAwesomeClassname: "logos:react-router",
          style: {
            //color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          style: {
            //color: "#02569B",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            //color: "#2C8EBB",
          },
        },
        {
          skillName: "mongoDB",
          fontAwesomeClassname: "logos:mongodb",
          style: {
            //color: "#663399",
          },
        },
      ],
    },
    {
      title: "Graphics & UI Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Crafting unique logos from scratch and tailoring designs to meet specific requirements",
        "⚡ Proficient in vectorization and illustration of diverse designs and figures   ",
        "⚡ Designing captivating and user-friendly interfaces to enhance user experience",
        "⚡ Mastering Photoshop to enhance visual appeal and elevate overall aesthetics",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "icon-park:adobe-photoshop",
          style: {
            //color: "#FF7C00",
            fontSize: "52px",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },

        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },

        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universtiy of Nebraska-Lincoln",
      subtitle: "Ph.D. in Computer Science",
      logo_path: "unl_logo.png",
      alt_name: "UNL",
      duration: "Aug 2023 - Present",
      location: "Lincoln, NE, USA",
      descriptions: [
        "⚡ Areas of Expertise: AI, Machine Learning, Deep Learning, Computer Vision, Quantum Computing, Design & Analysis of Algorithms.",
        "⚡ Notable Courses: Operating System Principles, Computer Vision, Design & Analysis of Algorithms, Machine Learning, Internet Systems & Programming.",
        "⚡ Academic Achievement: Maintained a perfect GPA of 4.0/4.0 throughout the program.",
        "⚡ Research Focus: Conducting cutting-edge research in the intersection of AI and quantum computing for groundbreaking applications.",
      ],
      website_link: "https://www.unl.edu/",
    },
    {
      title: "Port City International Universtiy",
      subtitle: "B.Sc. in Computer Science & Engineering",
      logo_path: "pciu_logo.png",
      alt_name: "PCIU",
      duration: "Jan 2017 - Mar 2021",
      location: "Chattogram, Bangladesh",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI, Pattern Recognition, ToC etc.",
        "⚡ Apart from this, I have done courses on Graphics Designing, Machine Learning, Deep Learning, Data Science, and Full Stack Development.",
        "⚡ Achieved merit scholarship given to 1% top students for attaining 3.98, 3.98, 3.99 and 4.00 in 1st, 2nd, 3rd and 4th year respectively as well as for securing the top engineering position along with other Bachelor benefits.",
      ],
      website_link: "http://www.portcity.edu.bd/",
    },
    {
      title: "Government City College, Chattogram",
      subtitle: "Higher Secondary Certificate (HSC) in Science",
      logo_path: "gccc_logo.png",
      alt_name: "Govt. City College",
      duration: "Jul 2013 - Apr 2015",
      location: "Chattogram, Bangladesh",
      descriptions: [
        "⚡ Joined Bangladesh Red Crescent Society as my first step towards voluntary and protection acknowledgement of society, however, equity establishment in society was a great intuition.",
        "⚡ Participated in the Bangladesh National Cadet Corps (BNCC) and continued to be the Petrol Leader throughout my entire college educational life. Overall, their entire campaign and tracking gave me the opportunity to self-motivation and hard working exercise to optimize. ",
        "⚡ Due to my interest in Computer Science, Data Science, and Artificial Intelligence, I prepared my courses for admission in the Bachelor with the greatest motivation for higher study purposes.",
      ],
      website_link: "https://gccc.edu.bd/",
    },
    {
      title: "Government Muslim High School, Chattogram",
      subtitle: "Secondary School Certificate (SSC) in Science",
      logo_path: "gmhs_logo.png",
      alt_name: "Govt. Muslim High School",
      duration: "Jan 2008 - Mar 2013",
      location: "Chattogram, Bangladesh",
      descriptions: [
        "⚡ Crossed the edge of primary school and got myself admitted to high school and the capacity to gain an accurate and deep intuitive knowledge of primary computer based education.",
        "⚡ Spontaneously participated Physics and Mathmatics Olympiad events premises at Government Muslim High School that brought fame and honor to my primary carrer establishment. Besides my competency in multipurpose science projects brought an addition to growing interest in Computer Science and Artificial Intelligence as well.",
        "⚡ Instinctive capacity to join volunteer campaigns and sports like athletics, high-jump, long-jump and similar extracurricular activities so far were enjoyable.",
      ],
      website_link: "http://gmhsctg.tsmts.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Crash Course",
      subtitle: "- Google Developers",
      logo_path: "google_logo.png",
      /*certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",*/
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Neural Network and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyper parameter Tuning, Regularization and Optimization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Sequence Models",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Deeplearning.ai",
      color_code: "#a9b3b8",
    },
    {
      title: "Using Python for Research",
      subtitle: "- Jukka-Pekka Onnela",
      logo_path: "harvard_university_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Harvard University",
      color_code: "#e8387e",
    },
    {
      title: "Python Specialization",
      subtitle: "- Charles Severance",
      logo_path: "university-of-michigan-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "University of Michigan",
      color_code: "#deb512",
    },
    {
      title: "Automate the Boring Stuff with Python Programming",
      subtitle: "- Al Sweigart",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Udemy",
      color_code: "#87ebff",
    },
    {
      title: "Machine Learning Bootcamp",
      subtitle: "- Geeks Academy",
      logo_path: "geeks-academy.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Geeks Academy",
      color_code: "#83a8fc",
    },
    {
      title: "Complete Web Development Course",
      subtitle: "- Jhankar Mahbub",
      logo_path: "programming-hero-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "Programming Hero",
      color_code: "#111133",
    },
    {
      title: "Graphics Designing",
      subtitle: "- Abdul Mannan",
      logo_path: "ledp-ict.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "ICT Ministry (LEDP)",
      color_code: "#c9ffe4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Conference and Volunteership",
  description:
    "I worked as a research assistant, having hands-on experience achieved in various evolving tech based workshops and being involved with many organizations and clubs, I carry a vast vision in my career as I see my reflection in mirror.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "Network Research Lab",
          company_url: "https://cse.unl.edu/~netgroup/",
          logo_path: "delhivery_logo.png",
          duration: "Mar 2024 - Present",
          location: "Lincoln, NE, US",
          description:
            "The Netgroup led by Dr. Byrav Ramamurthy at the School of Computing, University of Nebraska-Lincoln, focuses on innovative networking research, emphasizing efficient, scalable, and secure architectures. Ourprojects span Networking and Security, including Optical Networks, Peer-to-Peer Networks, and Software-Defined Networks, integrating expertise from network protocols, security, optimization, and graph theory for novel solutions.",
          color: "#0879bf",
        },
        {
          title: "Graduate Teaching Assistant",
          company: "University of Nebraska-Lincoln",
          company_url: "https://www.unl.edu/",
          logo_path: "unl_logo.png",
          duration: "Aug 2023 - Present",
          location: "Chattogram, Bangladesh",
          description:
            "As a Graduate Teaching Assistant at University of Nebraska–Lincoln, I've been entrusted with instructing 140 students in CSCE 310: Data Structures and Algorithms over consecutive semesters, including Fall 2023 and Spring 2024, with additional teaching assignments scheduled for Summer 2024. My duties encompass delivering lectures, leading recitations, and evaluating student assignments, all geared towards fostering active participation and facilitating academic achievement. Utilizing diverse teaching strategies, I strive to cultivate a dynamic learning environment where students are engaged, empowered, and equipped with the necessary skills to excel in their academic pursuits.",
          color: "#0879bf",
        },
        {
          title: "Teacher Consultant & Coding Instructor (Part-time)",
          company: "Codingal",
          company_url: "https://www.codingal.com/",
          logo_path: "codingal_logo.png",
          duration: "May 2022 - Jun 2023",
          location: "Chattogram, Bangladesh",
          description:
            "As a Teacher Consultant & Coding Instructor at CODINGAL, I led classes for K-12 students, fostering the development of their logical thinking and problem-solving abilities, with a primary emphasis on AI, Data Science, and Python. Additionally, I conducted webinars, masterclasses, and training workshops to further enhance their learning experience.",
          color: "#0879bf",
        },
        {
          title: "Assistant Programmer",
          company: "Arena Web Security",
          company_url: "https://www.arenawebsecurity.net/",
          logo_path: "AWS_logo.png",
          duration: "Apr 2021 - Jun 2023",
          location: "Dhaka, Bangladesh",
          description:
            "During my tenure as an Assistant Programmer, I played a pivotal role in software development lifecycle management. This encompassed tasks such as collecting user requirements, prioritizing them, and outlining technical specifications. Furthermore, I monitored software development and implementation phases, ensuring alignment with project goals. My responsibilities extended to creating test cases, evaluating software based on technical specifications and test cases, and conducting continuous system monitoring to detect and report any bugs promptly.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "Deep Learning Research Lab",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "Sep 2019 - Dec 2020",
          location: "Chattogram, Bangladesh",
          description:
            "I had worked here on different real life use cases and Deep Learning Methodologies directly under Professor Emam Hossain. Besides, after working hard on Time Series Analysis and Dynamic Forecaseting for about an year a piece of work had been recognized in International Conference on TCCE-2020 and published in Springer entitled “A Novel Deep Learning Approach to Predict Air Quality Index”. I had an amazing journey working under him.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Conferences",
      experiences: [
        {
          title:
            "International Conference on Big Data, IoT and Machine Learning (BIM 2021)",
          company: "Center for Natural Science & Engineering Research (CNSER)",
          company_url: "https://confbim.com/",
          logo_path: "intel_logo.jpg",
          duration: "23 Sep 2021 - 25 Sep 2021",
          location: "Cox's Bazar, Bangladesh",
          description:
            "BIM creates opportunity to help everyone, including leaders, policy-makers and people from all income groups and nations, to harness converging technologies in order to create an inclusive, human-centered future. It aims to develop policies and implement the policies focusing the components of 4.0 IR for sustainable developments. BIM 2021 is a good platform for researchers, professionals and students to involve them in innovation and research related to 4.0 IR.",
          color: "#0071C5",
        },
        {
          title:
            "ICSDTIR-2021: International Conference On Sustainable Development in Technology for 4th Industrial Revolution",
          company: "Port City International University",
          company_url: "https://www.easychair.org/cfp/ICSDTIR-2021",
          logo_path: "intel_logo.jpg",
          duration: "12 Mar 2021 - 13 Mar 2021",
          location: "PCIU, Chittagong, Bangladesh",
          description:
            "ICSDTIR focuses on the types of compatible technology, their integration and potential impact on society. The primary goal of this conference is to develop an informed, collective understanding of the benefits, challenges, and related through sustainale development for the 4th IR (Industrial Revolution). The Conference aims to provide the platform for research communities, engineers, scientists and students to share their research experience and innovative ideas in the fields of engineering and technology. To promote sustainable industries and invest in research, development and innovation are important ways to facilitate sustainable development.",
          color: "#0071C5",
        },
        {
          title:
            "2nd International Conference on Trends in Computational and Cognitive Engineering(TCCE-2020)",
          company: "INSTITUTE OF INFORMATION TECHNOLOGY, JU",
          company_url: "https://tcce.iitju.edu.bd/",
          logo_path: "delhivery_logo.png",
          duration: "17 Dec 2020 - 18 Dec 2020",
          location: "Jahangirnagar University, Dhaka, Bangladesh",
          description:
            "TCCE focuses on experimental, theoretical and application aspects of innovations in Computational and Cognitive Engineering. The Conference aims to provide an opportunity to gather the researchers, scholars and experts from academia and industry working in the following areas of basic and applied sciences, engineering and technology to share their research findings. ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Onsite Contests and Hackathons",
      experiences: [
        {
          title: "Inter University Programming Contest",
          company: "FSET Research Club, USTC",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "25 Nov 2019",
          location: "USTC, Bangladesh",
          description:
            "More than 100 teams had participated IUPC-2019. Among them we took place in the top 15. In the contest there were problems given from diverse problem domain. The research club of the University of Science and Technology, Chattogram had hosted and arranged the whole contest for the year 2019.",
          color: "#0879bf",
        },
        {
          title: "Software Development and PCIU Hackathon",
          company: "PCIU CSE Department",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "10 Nov 2018",
          location: "PCIU, Bangladesh",
          description:
            'The hackathon was searching for the solution of some real world problems. After thorough research and analysis I had developed a model to solve "Ensuring Proper Support For Agro Entrepreneurs" problem. Besides, had to develop a prototype of the model as implementation (android based). Acheived a verbal mention there.',
          color: "#0879bf",
        },
        {
          title: "ICPC Dhaka Regional 2018",
          company: "ICPC Foundation",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "3 Oct 2018",
          location: "PCIU, Bangladesh",
          description:
            "The International Collegiate Programming Contest is an algorithmic programming contest for students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Workshops",
      experiences: [
        {
          title:
            "National Workshop on Big Data and Machine Learning (BDML-2020)",
          company: "ICT Division & IEE Computer Society (Bangladesh Chapter)",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "9 Dec 2020 - 10 Dec 2020",
          location: "CUET, Bangladesh",
          description:
            "A two-day national workshop on big data and machine learning held at Chattogram University of Engineering and Technology (CUET). There were hands on training over how to preoare speech corpus for robust LVCSR, how to manage big data storages, the approaches and challanges of it, how to make speaker recognition system using timbre propertimes, and lots more.",
          color: "#0879bf",
        },
        {
          title: "BDAPPS Developer Workshop",
          company: "bdapps",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "22 Sep 2019",
          location: "Chattogram, Bangladesh",
          description:
            "The BDAPPS Developer Workshop provides participants technical training on the concepts and programming methodologies needed to develop applications for mobile devices. Participants learn to use different android libraries. Instruction is aided with live projects which allow students to grasp concepts of the complete mobile application development life-cycle.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning",
          company: "Port City International University",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "3 Aug 2019",
          location: "Chattogram, Bangladesh",
          description:
            "The workshop covers various topics on machhine learning to get started form scratch for a new student in this field — from its introduction and feed-forward neural networks to improving the learning models, also sequence modelling, deep neural netowrks, etc had also been demonstrated here. With this workshop, attendees are be able to start, develop and apply these models in real-life applications.",
          color: "#0879bf",
        },
        {
          title: "Workshop on Game Development",
          company: "Port City International University",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "28 Jul 2018",
          location: "Chattogram, Bangladesh",
          description:
            "In cooperation with the AgamiLabs, the Department of Computer Science and Engineering at Port City International University (PCIU), organized this workshop. During the whole training, the students built 3 arcade games using 3D unity in the area of computer science and/or digital media. On the end of the workshop, students presented their results to a jury who evaluated their performance and distributed prizes and certificates for the best performances.",
          color: "#0879bf",
        },
        {
          title: "Digital Entrepreneurship Workshop",
          company: "Grameenphone",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "17 Apr 2018",
          location: "Chattogram, Bangladesh",
          description:
            "The workshop has been specially designed to probide an understanding on the changing ecosystem of entrepreneurs, ideation & conception and the best practices of successful digital entrepreneurship; with a particular focus on Chittagong's developmental needs. Completing this workshop students will fuel innovation, boost personmal growth and community engagement among the youth who bear the mantle of th digital future.",
          color: "#0879bf",
        },
        {
          title: "Internet of things (IoT)",
          company: "BdOSN (Bangladesh Open Source Network)",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "25 Mar 2018",
          location: "Chattogram, Bangladesh",
          description:
            'A day long workshop entitled "Internet of THings (IoT)" was organized by Department of Computer Science and Engineering in collaboration with BdOSN. There were ten (10) distinctive projects which I with the help of my team made during the workshop. Of course the coach helped while making these projects. Building these projects includes arduino, sensors (different types), bread board, LEDs, LCD Display, connecting wires, Power. In accordance with all of these tools 10 projects had been made and later on using python programming the arduion was loaded with instructions to make them work.',
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "PCIU PCTS Official Club (Moderator)",
          company: "Port City International University",
          company_url: "https://www.facebook.com/groups/414553855782403",
          logo_path: "google_logo.png",
          duration: "June 2018 - Dec 2020",
          location: "Chattogram, Bangladesh",
          description:
            "During my tenure in this club, the portfolio of students that I have to lead them to were very distinct, as well as the superior competitions that I arranged, for instance, the Hackathon contest and different conferences for paper submission. ",
          color: "#4285F4",
        },
        {
          title: "UNYSAB MUN",
          company: "United Nations",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "24 Oct 2018 - 25 Oct 2018",
          location: "Rajshahi, Bangladesh",
          description:
            "This is a unique platform where through the successful establishment of worldwide crucial issues solutions are possible. Eventually, we submitted drafts and working papers, and participants on behalf of different countries gave their materialistic opinion towards the solutions. Participated in UNDP category on behalf of United Arab Emirates, discussed over potential equity of the world sustainable development goals, and earned a verbal mention.",
          color: "#D83B01",
        },
        {
          title: "World Water Day Campaign",
          company: "UNICEF",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "22 Mar 2021",
          location: "Dhaka, Bangladesh",
          description:
            "Joined the daylong online campaign on clean water security determination for common citizens. Though it was an online awareness campaign for ensuring clean and healthy purified water for the civilization of the world, the impact was great and 6 million joined remotely in this campaign. Point to be remembered, clean water and safety are one of the sustainable goals.",
          color: "#000000",
        },
        {
          title: "International Model United Nation",
          company: "United Nation",
          company_url: "",
          logo_path: "dsc_logo.png",
          duration: "Sep 2021 - Present",
          location: "Virtual",
          description:
            "This is a growing worldwide issue solvent crucial platform which is arranged under the shadow of United Nations assembly. Interestingly, this is a remote joining program where drafts resolutions and working paper submission is granting an open discussion over a trade war and Covid-19 pandemic situations to handle by developed countries and relief to developing and underdeveloped countries.",
          color: "#0C9D58",
        },
        {
          title: "NJF Volunteer",
          company: "Nobojagoron Foundation",
          company_url: "",
          logo_path: "delhivery_logo.png",
          duration: "July 2018 - Nov 2019",
          location: "Remote",
          description:
            "Fulfilled primary duty to be a teacher in the afternoon Nobojagoron Foundation School. Provided ICT lessons online to the poor but innovative children and teenagers. Besides the primary motto and duty as well, played a competitive and competent role to help underprivileged children for securing their future world and to train them to their ultimate goals, for instance, arranging game competition with IT regarding easy task solving. ",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page

//Projects Header
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects using latest Ai, ML, DL technologies solving various real life use cases.",
  avatar_image_path: "projects_image.svg",
};

//Projects Information

const ProjectsData = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Portfolio Website",
      createdAt: "Apr 2024",
      url: "",
      description:
        "A responsive website to display my professional information and to present a showcase of my work. The system was developed with HTML, CSS, BOOTSTRAP, JS, ReactJS, React Native, Typescript, React Router",
      isFork: false,
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "React Router",
          iconifyClass: "logos:react-router",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Regional Dialect Identification System using Deep Learning",
      createdAt: "Feb 2021",
      url: "",
      description:
        "The recognition system detects six (6) regional languages of Bangladesh. The system is developed based on my undergrad dissertation. It uses MFCC Features with a novel GLDNN Hybrid model for recognition.",
      isFork: false,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "AQI Prediction System using Deep Learning",
      createdAt: "July 2020",
      url: "",
      description:
        "The system was developed according to my published paper for predicting the AQI index to predict the air quality. After the data preprocessing. Here a Novel Deep Learning model had been used which consists of GRU and LSTM",
      isFork: false,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Arduino Ultrasonic Radar",
      createdAt: "Aug 2019",
      url: "",
      description:
        "This radar uses mainly Arduino and ultrasonic sensor to detect any specific object in a certain range. IT also gives the accurate distance information. C++ was used to program the arduino.",
      isFork: false,
      languages: [
        {
          name: "Arduino",
          iconifyClass: "logos:arduino",
        },
        {
          name: "C++",
          iconifyClass: "logos:c-plusplus",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Automated Attendance System (Team)",
      createdAt: "Jun 2019",
      url: "",
      description:
        "The system was developed using Android Studio to automate the typical tasks of taking attendance. Java, XML and Firebase database were used as developing languages and tools.",
      isFork: false,
      languages: [
        {
          name: "Android",
          iconifyClass: "flat-color-icons:android-os",
        },
        {
          name: "JAVA",
          iconifyClass: "logos-java",
        },
        {
          name: "Android Studio",
          iconifyClass: "mdi:android-studio",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Comshopify",
      createdAt: "Mar 2019",
      url: "",
      description:
        "A System for an IT shop used to display product details, search, purchase products based on different criteria. The system was developed with HTML, CSS, BOOTSTRAP, JS, React and MySQL database.",
      isFork: false,
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Fashion MNIST Classification",
      createdAt: "Jan 2019",
      url: "",
      description:
        "Fashion-MNIST is a dataset of Zalando's article images consisting of a training set of 60,000 examples and a test set of 10,000 examples. Several Deep Learning techniques such as Logistic Regression, Convolutional Nerural Network,  feed-forward Neural Network in categorizing Fashion MNIST images.",
      isFork: false,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Google Colab",
          iconifyClass: "simple-icons:googlecolab",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Handwritten Digit Recognition",
      createdAt: "Nov 2018",
      url: "",
      description:
        "The dataset includes 70,000 handwritten-digit images. Implemented a handwritten digit recognition app where a special type of deep neural network that is Convolutional Neural Networks had been used. In the end, built a GUI in which digits can be drawn and recognized it straight away.",
      isFork: false,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Google Colab",
          iconifyClass: "simple-icons:googlecolab",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "ModernFarmer (Prototype)",
      createdAt: "Nov 2018",
      url: "",
      description:
        'It\'s a prototype android based application which was developed addressing one of the problem domain ("Ensuring Proper Support For Agro Entrepreneurs") given at "Software Development and PCIU Hackathon 2018". The system was developed using Java and Firebase database.',
      isFork: false,
      languages: [
        {
          name: "Android",
          iconifyClass: "flat-color-icons:android-os",
        },
        {
          name: "JAVA",
          iconifyClass: "logos-java",
        },
        {
          name: "Android Studio",
          iconifyClass: "mdi:android-studio",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Titanic Survival Prediction Using Machine Learning",
      createdAt: "Oct 2018",
      url: "",
      description:
        "The system was developed to predict the survival of the titanic disaster happened in 1912. After doing the preprocessing several machine learning models were applied and the best was chosen examining the confusion matrix, accuracy, precision, recall and f1- score.",
      isFork: false,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Archer Mastery Game",
      createdAt: "Jul 2018",
      url: "",
      description:
        "It's an arcade game developed using Unity,a cross-platform game engine. Besides other programming languages, C++ was used mainly alongside unity for th development purpose.",
      isFork: false,
      languages: [
        {
          name: "Unity Engine",
          iconifyClass: "logos:unity",
        },
        {
          name: "C++",
          iconifyClass: "logos:c-plusplus",
        },
      ],
    },
  ],
};

//Publication Header
const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

//Publication Information
const PublicationData = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      url: "https://link.springer.com/chapter/10.1007/978-981-33-4673-4_29",
      name: "A Novel Deep Learning Approach to Predict Air Quality Index",
      createdAt: "Dec 2020",
      publishedIn:
        "Proceedings of International Conference on Trends in Computational and Cognitive Engineering 2020",
      publisher: "Springer",
      abstract:
        "In accordance with the World Health Organization’s instruction, the air quality in Bangladesh is considered perilous. A productive and precise air quality index (AQI) is a must and one of the obligatory conditions for helping the society to be viable in lieu of the consequences of air contamination. If we know the index of air quality in advance, then it would be of a great help saving our health from air contamination. This study introduces an air quality index prediction model for two mostly polluted cities in Bangladesh: Dhaka and Chattogram. Gated recurrent unit (GRU), long short-term memory (LSTM) are the two robust variation of recurrent neural network (RNN). This model combines these two together. We have used GRU as first hidden layer and LSTM as the second hidden layer of the model, followed by two dense layers. After collecting and processing the data, the model was trained on 80% of the data and then validated against the remaining data. We have evaluated the performance of the model considering MSE, RMSE, and MAE to see how much error does the model produce. Results reflect that our model can follow the actual AQI trends for both cities. At last, we have juxtaposed the performance of our proposed hybrid model against a standalone GRU model and a standalone LSTM model. Results also show that combining these two models improves the overall model’s performance.",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      url:
        "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003256069-16/comparative-study-big-data-visualization-tools-techniques-khadija-begum-md-mamunur-rashid-mohammad-arafath-uddin-shariff",
      name:
        "A Comparative Study of Big Data Visualization Tools and Techniques",
      createdAt: "Feb 2023  ",
      publishedIn: "Applied Informatics for Industry 4.0",
      publisher: "Taylor & Francis",
      abstract:
        "We are living in an age where everything is getting recorded digitally, thanks to the rise of the Internet and Social Media. Exabytes of data are getting generated frequently which needs to be explored, cleansed and analysed to make them usable. Big data is a term that represents a huge volume of structured, semi-structured, or unstructured data. Translating information into meaningful visual context such as graphs, maps or charts to make data easier as well as pulling insights are called Data visualization. It also introduces numerous possibilities for solving the big-data problem by creative ideation through visual means. Lots of challenges as well as problems are associated with big data analysis due to its complex characteristics. In this article, we’ll discuss about the reasons of big data visualization being necessary, as well as some big data visualization tools. We will also summarize different types of challenges in visualization methods as well as suggest possible way forward for complications pertaining to the visualization of Big Data. In addition, the working procedure, characteristics, and drawbacks of several tools and techniques for big data visualization are examined in our research.",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      url:
        "https://drive.google.com/file/d/1WhTagumtEyfUz570pnsT2D-eN3l9UcAL/view?usp=sharing",
      name:
        "A Bangladeshi Regional Dialects Identification using a Novel GLDNN Hybrid Model",
      createdAt: "Mar 2021",
      publishedIn: "Dissertation Book",
      publisher: "Undergraduate Thesis",
      abstract:
        "Dialect recognition is an area of linguistic recognition science. In speech processing, automatic recognition systems are used effectively to categorize observed utterances by the speaker's identity, dialect, and linguistic communication. The dialect of the speaker can reduce automatic speech recognition systems efficiency. Dialects can affect the recognition of the voice because they influence intonation and syllable pronunciation. The characteristics of each tribe and area reflect in each dialect. There has been a significant amount of investigation to detect speeches, dialects, and tongues of various regions worldwide. However, the research is not popular to work on Bangladeshi dialects. In turn, these dialects vary considerably. This work is an effort to meet the needs of new languages which have not received enough resources. The recognition scheme will serve the benefit and interest of Bangladeshi-speakers and helps to keep the dialects of the language preserved. Speech samples are obtained to create a database that contains dialects of various ages and genders. Mel Frequency Cepstral Coefficients as features derived from the database. The dialects under consideration are Barisali, Brahmanbaria, Chittagonian, Chapainawabganj, Noakhali & Sylheti. This paper aims to build a speech-recognition System with Mel Frequency Cepstral Coefficients that is fed into a Neural Network based hybrid system (GLDNN) consists of Gated Recurrent Unit (GRU), Long-Short Term Memory (LSTM), and Deep Neural Network to distinguish those specific dialects. Results indicate that the system outperforms the preceding system.",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mahin-arafath-500-500.png",
    description:
      "I am available on almost every social media. Knock me, I'll try to reply asap. I can help you with ML, DL, AI, Problem Solving, Python, React, Designing and Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://mhnarfth.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lincon, Nebraska, United States",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/hn3aWSPfbH6JhPPBA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "(402) 417-6666",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  ProjectsData,
  publicationsHeader,
  PublicationData,
  contactPageData,
};
