import { GoogleGenAI } from "@google/genai";

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
    trainer: 'Sarah Connor',
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
    trainer: 'John McClane',
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
    category: 'Chemicals',
    trainer: 'Ellen Ripley'
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
    trainer: 'Dr. House',
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
    category: 'Machinery',
    trainer: 'Tony Stark'
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
    trainer: 'Emmett Brown',
    badge: { text: 'Hard', color: 'dark' }
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
    const course = SAMPLE_COURSES.find(c => c.id === courseId);
    if (!course) return;

    // Redirect to course page if we are on a listing page, otherwise show modal
    // For this implementation, let's strictly link to course.html for detailed view as per wireframe logic
    // But keep modal for quick view on landing page.
    
    const modalEl = document.getElementById('courseModal');
    if (modalEl) {
        document.getElementById('modalTitle').textContent = course.title;
        document.getElementById('modalImage').src = course.image;
        document.getElementById('modalDescription').textContent = course.description;
        document.getElementById('modalCategory').textContent = course.category;
        document.getElementById('modalLevel').textContent = course.level;

        const startBtn = document.getElementById('modalStartBtn');
        startBtn.onclick = () => {
            courseModalInstance.hide();
            window.location.href = `course.html?id=${course.id}`;
        };

        courseModalInstance = new bootstrap.Modal(modalEl);
        courseModalInstance.show();
    } else {
        window.location.href = `course.html?id=${courseId}`;
    }
};

// --- COURSE RENDERING ---
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
        <div class="card h-100 shadow-sm border-0">
            <div class="position-relative overflow-hidden rounded-top">
                <img src="${course.image}" class="card-img-top hover-zoom" alt="${course.title}" style="height: 200px; object-fit: cover;">
                <span class="position-absolute top-0 end-0 badge bg-light text-dark m-2 opacity-90 shadow-sm fw-bold">${course.level}</span>
                ${badgeHtml}
            </div>
            <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
                 <small class="text-safety-orange fw-bold text-uppercase">${course.category}</small>
                 <small class="text-muted"><i class="bi bi-person"></i> ${course.trainer}</small>
            </div>
            <h5 class="card-title fw-bold">${course.title}</h5>
            <p class="card-text text-secondary small flex-grow-1">${course.description.substring(0, 100)}...</p>
            
            <div class="d-flex justify-content-between align-items-center text-muted small my-3 pt-3 border-top">
                <span><i class="bi bi-clock me-1"></i> ${course.duration}</span>
                <span><i class="bi bi-layers me-1"></i> ${course.modules} Modules</span>
            </div>

            <button onclick="openCourseModal('${course.id}')" class="btn btn-outline-dark w-100 mt-auto fw-bold">
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

// --- PAGE INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Landing Page Init
    if (document.getElementById('course-grid')) {
        renderCourses();
    }

    // Course Detail Page Init
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    if (courseId && document.getElementById('detail-course-title')) {
        const course = SAMPLE_COURSES.find(c => c.id === courseId);
        if (course) {
            document.getElementById('detail-course-title').textContent = course.title;
            document.getElementById('detail-course-desc').textContent = course.description;
            document.getElementById('detail-category').textContent = course.category;
            document.getElementById('detail-duration').textContent = course.duration;
            document.getElementById('detail-level').textContent = course.level;
            document.getElementById('detail-image').src = course.image;
            document.getElementById('detail-trainer').textContent = course.trainer;
        }
    }

    // Search Page Init
    if (document.getElementById('search-results-container')) {
        // Mock search results
        const container = document.getElementById('search-results-container');
        SAMPLE_COURSES.forEach(course => {
            const el = document.createElement('div');
            el.className = 'card mb-3 border-0 shadow-sm';
            el.innerHTML = `
                <div class="row g-0 align-items-center">
                    <div class="col-md-3">
                        <img src="${course.image}" class="img-fluid rounded-start h-100 object-fit-cover" alt="..." style="min-height: 140px;">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title fw-bold"><a href="course.html?id=${course.id}" class="text-decoration-none text-dark">${course.title}</a></h5>
                            <p class="card-text text-secondary">${course.description}</p>
                            <p class="card-text"><small class="text-body-secondary">Trainer: ${course.trainer} | ID: ${course.id}</small></p>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(el);
        });
    }

    // Dashboard Init (Trainer/Trainee Switch)
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role') || 'trainee';
    if(document.getElementById('dashboard-view')) {
        if(role === 'trainer') {
            document.getElementById('trainer-dashboard').classList.remove('d-none');
            document.getElementById('trainee-dashboard').classList.add('d-none');
            document.getElementById('dashboard-title').textContent = 'Trainer Dashboard';
        } else {
            document.getElementById('trainer-dashboard').classList.add('d-none');
            document.getElementById('trainee-dashboard').classList.remove('d-none');
            document.getElementById('dashboard-title').textContent = 'My Learning';
        }
    }
});

// --- LOGIN HANDLER ---
window.handleLogin = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Signing in...';
    btn.disabled = true;

    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
};

// --- CHAT BOT ---
let isChatOpen = false;

window.toggleChat = () => {
    isChatOpen = !isChatOpen;
    const widget = document.getElementById('chat-widget');
    const icon = document.getElementById('chat-icon');
    const btn = document.getElementById('chat-toggle-btn');
    const input = document.getElementById('chat-input');

    if (isChatOpen) {
    widget.classList.remove('closed');
    icon.classList.remove('bi-chat-dots-fill');
    icon.classList.add('bi-x-lg');
    btn.classList.remove('btn-safety');
    btn.classList.add('btn-dark');
    if(input) setTimeout(() => input.focus(), 300);
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
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API Key missing");

    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = "You are an expert Workplace Safety Consultant. Provide brief, actionable safety advice. Keep answers under 100 words.";

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