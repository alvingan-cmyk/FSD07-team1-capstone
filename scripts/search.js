import { GoogleGenAI } from "@google/genai";

// --- DATA ---
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

// --- TOASTS ---
window.showToast = (title, message, type) => {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const bgClass = type === 'success' ? 'text-bg-success' :
        type === 'error' ? 'text-bg-danger' :
            type === 'warning' ? 'text-bg-warning' : 'text-bg-info';

    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center ${bgClass} border-0 mb-2`;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
        <div class="d-flex">
        <div class="toast-body">
            <strong>${title}</strong>
            <div class="small">${message}</div>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

    toastContainer.appendChild(toastEl);
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    // Remove DOM element after hidden
    toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
    });
};

// --- MODAL ---
let courseModalInstance = null;

window.openCourseModal = (courseId) => {
    // Navigate to course.html for detailed view instead of modal if on specific pages
    if(window.location.href.includes('search.html') || window.location.href.includes('dashboard.html')) {
        window.location.href = `course.html?id=${courseId}`;
        return;
    }

    const course = SAMPLE_COURSES.find(c => c.id === courseId);
    if (!course) return;

    const modalEl = document.getElementById('courseModal');
    if (!modalEl) return; 

    // Update Modal Content
    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalImage').src = course.image;
    document.getElementById('modalDescription').textContent = course.description;
    document.getElementById('modalCategory').textContent = course.category;
    document.getElementById('modalLevel').textContent = course.level;

    // Update Start Button
    const startBtn = document.getElementById('modalStartBtn');
    if (startBtn) {
        startBtn.onclick = () => {
            courseModalInstance.hide();
            showToast('Enrollment Successful', `You have enrolled in: ${course.title}`, 'success');
        };
    }

    // Show Modal
    courseModalInstance = new bootstrap.Modal(modalEl);
    courseModalInstance.show();
};

// --- COURSE RENDERING FOR LANDING ---
window.renderCourses = (filter = 'All') => {
    const grid = document.getElementById('course-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filter === 'All'
        ? SAMPLE_COURSES
        : SAMPLE_COURSES.filter(c => c.category === filter);

    filtered.forEach(course => {
        const badgeHtml = course.badge
            ? `<span class="position-absolute top-0 start-0 badge bg-${course.badge.color} m-2 shadow-sm">${course.badge.text}</span>`
            : '';

        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
        <div class="card h-100 shadow-sm course-card-anim">
            <div class="position-relative">
                <img src="${course.image}" class="card-img-top" alt="${course.title}" style="height: 200px; object-fit: cover;">
                <span class="position-absolute top-0 end-0 badge bg-light text-dark m-2 opacity-75 shadow-sm">${course.level}</span>
                ${badgeHtml}
            </div>
            <div class="card-body d-flex flex-column">
            <small class="text-safety-orange fw-bold text-uppercase mb-2">${course.category}</small>
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text text-secondary small flex-grow-1">${course.shortDescription}</p>
            
            <div class="d-flex justify-content-between align-items-center text-muted small my-3 pt-3 border-top">
                <span><i class="bi bi-clock me-1"></i> ${course.duration}</span>
                <span><i class="bi bi-layers me-1"></i> ${course.modules} Modules</span>
            </div>

            <button onclick="openCourseModal('${course.id}')" class="btn btn-dark w-100 mt-auto">
                View Details
            </button>
            </div>
        </div>
        `;
        grid.appendChild(col);
    });
};

window.filterCourses = (category) => {
    renderCourses(category);
};

// --- PAGE SPECIFIC INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Landing Page Init
    if (document.getElementById('course-grid')) {
        renderCourses();
    }

    // 2. Dashboard Page Init
    if (document.getElementById('dashboard-course-list')) {
        renderDashboardCourses();
    }

    // 3. Search Page Init
    if (document.getElementById('search-results-container')) {
        // Parse URL params for query
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        
        // Update display
        const displayEl = document.getElementById('search-query-display');
        if (displayEl && query) {
            displayEl.textContent = `Search Results for: "${query}"`;
        }
        
        // Render search results
        renderSearchResults(query);
        
        // Attach filter button handler
        const filterBtn = document.getElementById('apply-filters-btn');
        if (filterBtn) {
            filterBtn.addEventListener('click', applySidebarFilters);
        }
    }

    // 4. Course Detail Page Init
    if (document.getElementById('course-detail-container')) {
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id');
        if (courseId) {
            renderCourseDetail(courseId);
        }
    }
});

// --- SEARCH RESULTS RENDERING ---
function renderSearchResults(query) {
    const container = document.getElementById('search-results-container');
    if (!container) return;

    let results = SAMPLE_COURSES;
    if (query) {
        const lowerQ = query.toLowerCase();
        results = SAMPLE_COURSES.filter(c => 
            c.title.toLowerCase().includes(lowerQ) || 
            c.category.toLowerCase().includes(lowerQ)
        );
    }

    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = '<div class="alert alert-info">No courses found matching your criteria.</div>';
        return;
    }

    results.forEach(course => {
        const el = document.createElement('div');
        el.className = 'col-12';
        el.innerHTML = `
            <div class="card mb-3 shadow-sm hover-shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title text-primary"><a href="course.html?id=${course.id}" class="text-decoration-none">${course.title}</a></h5>
                        <small class="text-muted">${course.level}</small>
                    </div>
                    <p class="card-text text-secondary">${course.shortDescription}</p>
                    <div class="d-flex gap-2">
                        <span class="badge bg-light text-dark border">${course.category}</span>
                        <span class="badge bg-light text-dark border">${course.duration}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(el);
    });
}

// --- SEARCH FILTER LOGIC ---
window.applySidebarFilters = () => {
    // 1. Get all checked values into arrays
    const selectedCats = Array.from(document.querySelectorAll('.category-filter:checked'))
                              .map(cb => cb.value);
    const selectedLvls = Array.from(document.querySelectorAll('.level-filter:checked'))
                              .map(cb => cb.value);

    // 2. Filter the global data
    const results = SAMPLE_COURSES.filter(course => {
        // If no category is selected, show all; otherwise, match selected ones
        const categoryMatch = selectedCats.length === 0 || selectedCats.includes(course.category);
        
        // If no level is selected, show all; otherwise, match selected ones
        const levelMatch = selectedLvls.length === 0 || selectedLvls.includes(course.level);

        return categoryMatch && levelMatch;
    });

    // 3. Render the filtered results
    const container = document.getElementById('search-results-container');
    if (!container) return;
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = '<div class="alert alert-info w-100">No courses match those filters.</div>';
        return;
    }

    results.forEach(course => {
        const el = document.createElement('div');
        el.className = 'col-12';
        el.innerHTML = `
            <div class="card mb-3 shadow-sm hover-shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title text-primary">
                            <a href="course.html?id=${course.id}" class="text-decoration-none">${course.title}</a>
                        </h5>
                        <small class="text-muted">${course.level}</small>
                    </div>
                    <p class="card-text text-secondary">${course.shortDescription}</p>
                    <div class="d-flex gap-2">
                        <span class="badge bg-light text-dark border">${course.category}</span>
                        <span class="badge bg-light text-dark border">${course.duration}</span>
                    </div>
                </div>
            </div>`;
        container.appendChild(el);
    });
};

// --- COURSE DETAIL LOGIC ---
function renderCourseDetail(id) {
    const course = SAMPLE_COURSES.find(c => c.id === id);
    if (!course) {
        document.getElementById('course-detail-container').innerHTML = '<div class="alert alert-danger">Course not found.</div>';
        return;
    }

    // Populate basic data
    document.querySelectorAll('.course-title-target').forEach(el => el.textContent = course.title);
    document.querySelectorAll('.course-desc-target').forEach(el => el.textContent = course.description);
    document.querySelectorAll('.course-level-target').forEach(el => el.textContent = course.level);
    document.querySelectorAll('.course-duration-target').forEach(el => el.textContent = course.duration);
    
    // Populate instructor
    if (course.instructor) {
        document.querySelectorAll('.course-instructor-target').forEach(el => el.textContent = course.instructor.name);
        const instructorImg = document.querySelector('.instructor-avatar');
        if (instructorImg && course.instructor.image) instructorImg.src = course.instructor.image;
        const instructorCreds = document.querySelector('.instructor-credentials');
        if (instructorCreds && course.instructor.credentials) instructorCreds.textContent = course.instructor.credentials;
    }
    
    // Populate image
    const imgTarget = document.querySelector('.course-img-target');
    if (imgTarget) imgTarget.src = course.image;

    // Populate syllabus
    if (course.syllabus) {
        const accordionContainer = document.getElementById('syllabusAccordion');
        if (accordionContainer) {
            accordionContainer.innerHTML = '';
            
            course.syllabus.forEach((module, index) => {
                const moduleId = `mod${index + 1}`;
                const isFirst = index === 0;
                
                const accordionItem = document.createElement('div');
                accordionItem.className = 'accordion-item';
                accordionItem.innerHTML = `
                    <h2 class="accordion-header">
                        <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#${moduleId}">
                            Module ${index + 1}: ${module.title}
                        </button>
                    </h2>
                    <div id="${moduleId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" 
                         data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body text-secondary">${module.content}</div>
                    </div>
                `;
                accordionContainer.appendChild(accordionItem);
            });
        }
    }
}

// --- CHAT BOT (Existing) ---
let isChatOpen = false;

window.toggleChat = () => {
    isChatOpen = !isChatOpen;
    const widget = document.getElementById('chat-widget');
    const icon = document.getElementById('chat-icon');
    const btn = document.getElementById('chat-toggle-btn');
    if (!widget) return;

    if (isChatOpen) {
        widget.classList.remove('closed');
        icon.classList.remove('bi-chat-dots-fill');
        icon.classList.add('bi-x-lg');
        btn.classList.remove('btn-safety');
        btn.classList.add('btn-dark');
        setTimeout(() => {
            const input = document.getElementById('chat-input');
            if(input) input.focus();
        }, 300);
    } else {
        widget.classList.add('closed');
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-chat-dots-fill');
        btn.classList.remove('btn-dark');
        btn.classList.add('btn-safety');
    }
};

window.handleChatKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
};

window.sendMessage = async () => {
    const input = document.getElementById('chat-input');
    const msgContainer = document.getElementById('chat-messages');
    const text = input.value.trim();

    if (!text) return;

    // User Msg
    appendMessage('user', text);
    input.value = '';
    input.disabled = true;

    // Loading State
    const loadingId = 'loading-' + Date.now();
    const loadingHtml = `
            <div id="${loadingId}" class="d-flex justify-content-start">
            <div class="bg-white border p-2 rounded">
                <div class="spinner-border spinner-border-sm text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            </div>`;
    msgContainer.insertAdjacentHTML('beforeend', loadingHtml);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    try {
        // Initialize Gemini
        const apiKey = process.env.API_KEY;
        if (!apiKey) throw new Error("API Key missing");

        const ai = new GoogleGenAI({ apiKey });
        const systemPrompt = "You are an expert Workplace Safety Consultant (OSHA certified equivalent). Provide brief, actionable, and serious safety advice. If the question implies an immediate life-threatening emergency, advise them to call emergency services immediately. Keep answers under 100 words.";

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: text,
            config: { systemInstruction: systemPrompt }
        });

        document.getElementById(loadingId).remove();
        appendMessage('bot', response.text || "I couldn't process that.");

    } catch (error) {
        console.error(error);
        if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();
        appendMessage('bot', "System offline. Please check your connection.");
    } finally {
        input.disabled = false;
        input.focus();
    }
};

function appendMessage(role, text) {
    const msgContainer = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = `d-flex ${role === 'user' ? 'justify-content-end' : 'justify-content-start'}`;

    const bubble = document.createElement('div');
    bubble.className = `p-2 rounded ${role === 'user' ? 'bg-primary text-white' : 'bg-white border text-dark'}`;
    bubble.style.maxWidth = '85%';
    bubble.innerText = text;

    div.appendChild(bubble);
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
}