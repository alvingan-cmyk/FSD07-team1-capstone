/* 

categoryId: 1
categoryName: "Web Development"
createdAt: "2026-02-04T21:55:43"
description: "Learn Spring Boot from scratch"
duration: 120
id: 1
imageUrl: null
level: "BEGINNER"
title: "Spring Boot Fundamentals"
trainerId: 1
trainerName: "Alex Johnson"

*/

const SAMPLE_COURSES = [
    {
        id: '1',
        title: 'Construction Site Basics',
        shortDescription: 'Learn the fundamentals of working on a construction site including roles, tools, and safety practices.',
        description: 'This course introduces learners to the fundamentals of working on a construction site. It covers common site roles, tools, and basic terminology used across projects. Learners will understand essential safety rules, site access requirements, and expected workplace behavior. The course is designed for individuals who are new to construction environments.',
        image: './assets/img/course_07.jpg',
        duration: '15 mins',
        modules: 6,
        level: 'Beginner',
        category: 'Construction',
        badge: { text: 'Mandatory', color: 'danger' },
        instructor: {
            name: "Sarah Jenkins",
            credentials: "NEBOSH International Diploma in Occupational Health & Safety. 12+ years experience.",
            image: "./assets/img/carousell_00.png"
        },
        syllabus: [
            {
                title: "Introduction to Construction Sites",
                content: "Types of construction sites and environments.<br>Common site layouts and access points."
            },
            {
                title: "Roles & Responsibilities",
                content: "Key site roles and responsibilities.<br>Reporting lines and supervision."
            },
            {
                title: "Basic Tools & Equipment",
                content: "Common tools used on site.<br>Safe handling and storage practices."
            },
            {
                title: "Site Safety Fundamentals",
                content: "PPE requirements.<br>General safety rules."
            },
            {
                title: "Site Access & Conduct",
                content: "Entry procedures and permits.<br>Professional behavior standards."
            },
            {
                title: "Construction Terminology",
                content: "Common construction terms.<br>Site signage and instructions."
            }
        ]
    },
    {
        id: '2',
        title: 'Construction Workflow & Risk Awareness',
        shortDescription: 'Explore project workflows, task coordination, and early risk identification on construction sites.',
        description: 'This course explores how construction projects progress from planning through execution. Learners will gain insight into task sequencing, team coordination, and common on-site risks. The course emphasizes recognizing hazards early and communicating effectively to prevent delays or incidents. It is ideal for workers with hands-on site experience.',
        image: './assets/img/course_08.jpg',
        duration: '25 mins',
        modules: 6,
        level: 'Intermediate',
        category: 'Construction',
        badge: { text: 'Updated', color: 'warning' },
        instructor: {
            name: "Chief Mike Ross",
            credentials: "Construction Safety Specialist. 15+ years field experience.",
            image: "./assets/img/user_m_03_sq.jpg"
        },
        syllabus: [
            {
                title: "Construction Project Phases",
                content: "Planning, execution, and close-out.<br>Role of each phase."
            },
            {
                title: "Task Sequencing & Coordination",
                content: "Trade dependencies.<br>Avoiding workflow conflicts."
            },
            {
                title: "On-Site Risk Identification",
                content: "Common construction hazards.<br>High-risk work activities."
            },
            {
                title: "Communication on Site",
                content: "Toolbox talks and briefings.<br>Issue escalation."
            },
            {
                title: "Incident Prevention",
                content: "Near-miss awareness.<br>Preventive controls."
            },
            {
                title: "Site Documentation Basics",
                content: "Permits and checklists.<br>Importance of records."
            }
        ]
    },
    {
        id: '3',
        title: 'Construction Project Control & Compliance',
        shortDescription: 'Master complex construction activities through quality management and regulatory compliance.',
        description: 'This course focuses on managing complex construction activities while maintaining quality and compliance. Learners will study documentation, regulatory requirements, and risk control strategies. The course highlights methods to reduce rework, improve efficiency, and maintain safe operations. It is intended for supervisors and project leaders.',
        image: './assets/img/course_09.jpg',
        duration: '45 mins',
        modules: 6,
        level: 'Advanced',
        category: 'Construction',
        instructor: {
            name: "Dr. Elena Foster",
            credentials: "Construction Project Management Expert. PhD in Civil Engineering.",
            image: "./assets/img/user_f_01.jpg"
        },
        syllabus: [
            {
                title: "Regulatory Requirements",
                content: "Construction laws and standards.<br>Authority inspections."
            },
            {
                title: "Quality Control Processes",
                content: "Inspections and testing.<br>Managing defects."
            },
            {
                title: "Risk Control Strategies",
                content: "Advanced hazard mitigation.<br>Monitoring controls."
            },
            {
                title: "Project Documentation",
                content: "Compliance records.<br>Change management."
            },
            {
                title: "Audit & Inspection Readiness",
                content: "Preparing for audits.<br>Responding to findings."
            },
            {
                title: "Leadership on Site",
                content: "Supervisory accountability.<br>Enforcing standards."
            }
        ]
    },
    {
        id: '4',
        title: 'Healthcare Environment Essentials',
        shortDescription: 'Understand healthcare facility operations, patient safety, hygiene practices, and professional conduct.',
        description: 'This course provides an overview of how healthcare facilities operate. Learners will be introduced to patient safety principles, hygiene practices, and professional conduct. The course explains basic roles, workflows, and communication within healthcare settings. It is suitable for new healthcare workers and support staff.',
        image: './assets/img/health1.jpg',
        duration: '20 mins',
        modules: 5,
        level: 'Beginner',
        category: 'Healthcare',
        badge: { text: 'Trending', color: 'success' },
        instructor: {
            name: "Kevin Hart",
            credentials: "Registered Nurse. Healthcare Safety Coordinator with 10+ years experience.",
            image: "./assets/img/user_m_01_sq.jpg"
        },
        syllabus: [
            {
                title: "Healthcare Facility Overview",
                content: "Types of healthcare settings.<br>Department functions."
            },
            {
                title: "Patient Safety Basics",
                content: "Safety principles.<br>Common patient risks."
            },
            {
                title: "Hygiene & Cleanliness",
                content: "Hand hygiene.<br>Clean environment standards."
            },
            {
                title: "Professional Conduct",
                content: "Ethics and confidentiality.<br>Respectful communication."
            },
            {
                title: "Healthcare Roles",
                content: "Clinical vs non-clinical staff.<br>Team collaboration."
            }
        ]
    },
    {
        id: '5',
        title: 'Patient Care & Clinical Safety',
        shortDescription: 'Build skills in infection control, patient handling, and clinical risk awareness.',
        description: 'This course builds on foundational knowledge to strengthen patient care and safety practices. Learners will explore infection control, safe patient handling, and clinical risk awareness. The course also emphasizes teamwork and clear communication in care environments. It is designed for staff involved in patient-facing or clinical support roles.',
        image: './assets/img/health2.png',
        duration: '30 mins',
        modules: 6,
        level: 'Intermediate',
        category: 'Healthcare',
        instructor: {
            name: "Eng. David Chen",
            credentials: "Clinical Safety Engineer. Certified in Patient Handling and Mobility.",
            image: "./assets/img/user_m_00_sq.jpg"
        },
        syllabus: [
            {
                title: "Infection Control",
                content: "Standard precautions.<br>Preventing cross-contamination."
            },
            {
                title: "Safe Patient Handling",
                content: "Lifting and transfer methods.<br>Assistive devices."
            },
            {
                title: "Clinical Risk Awareness",
                content: "Identifying patient hazards.<br>Error prevention."
            },
            {
                title: "Communication in Care Teams",
                content: "Shift handovers.<br>Escalating concerns."
            },
            {
                title: "Incident Reporting",
                content: "Reporting procedures.<br>Timely documentation."
            },
            {
                title: "Patient-Centered Care",
                content: "Respect and dignity.<br>Supporting patient needs."
            }
        ]
    },
    {
        id: '6',
        title: 'Healthcare Quality & Regulatory Standards',
        shortDescription: 'Master quality management, regulatory compliance, and leadership in healthcare settings.',
        description: 'This course examines quality management and regulatory compliance in healthcare settings. Learners will gain an understanding of audits, documentation, and performance standards. The course focuses on risk reduction and continuous improvement in patient care. It is intended for experienced professionals and healthcare leaders.',
        image: './assets/img/health3.jpg',
        duration: '40 mins',
        modules: 6,
        level: 'Advanced',
        category: 'Healthcare',
        badge: { text: 'Hard', color: 'dark' },
        instructor: {
            name: "Watts Wilson",
            credentials: "Healthcare Quality Management Director. MBA in Healthcare Administration.",
            image: "./assets/img/user_f_02.jpg"
        },
        syllabus: [
            {
                title: "Healthcare Regulations",
                content: "National and local standards.<br>Compliance expectations."
            },
            {
                title: "Quality Management Systems",
                content: "Continuous improvement.<br>Measuring outcomes."
            },
            {
                title: "Audit Preparation",
                content: "Internal audits.<br>External inspections."
            },
            {
                title: "Documentation & Records",
                content: "Clinical documentation.<br>Data accuracy."
            },
            {
                title: "Risk Management",
                content: "Identifying system risks.<br>Mitigation strategies."
            },
            {
                title: "Leadership in Healthcare",
                content: "Driving quality culture.<br>Accountability."
            }
        ]
    }
];