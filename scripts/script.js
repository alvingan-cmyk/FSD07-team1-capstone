// import { GoogleGenAI } from "@google/genai";

// --- DATA ---
const SAMPLE_COURSES = [
    {
        id: '1',
        title: 'Personal Protective Equipment (PPE)',
        description: 'Learn the correct selection, use, and maintenance of PPE including hard hats, eye protection, and respiratory gear.',
        image: 'assets/img/c01-t01.jpg',
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
        image: 'assets/img/c01-t02.jpg',
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
        image: 'assets/img/c01-t03.jpg',
        duration: '45 mins',
        modules: 8,
        level: 'Advanced',
        category: 'Chemicals'
    },
    {
        id: '4',
        title: 'Ergonomics in the Workplace',
        description: 'Prevent repetitive strain injuries (RSI) and back pain through proper lifting techniques and workstation setup.',
        image: 'assets/img/c02-t01.jpg',
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
        image: 'assets/img/c02-t02.jpg',
        duration: '30 mins',
        modules: 5,
        level: 'Intermediate',
        category: 'Machinery'
    },
    {
        id: '6',
        title: 'Electrical Safety Awareness',
        description: 'Identify electrical hazards, understand arc flash risks, and learn safe working distances.',
        image: 'assets/img/c02-t03.jpg',
        duration: '40 mins',
        modules: 7,
        level: 'Advanced',
        category: 'Electrical',
        badge: { text: 'Hard', color: 'dark' }
    }
];

// --- TOASTS ---
window.showToast = (title, message, type) => {
    const toastContainer = document.getElementById('toast-container');
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

    // Update Modal Content
    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalImage').src = course.image;
    document.getElementById('modalDescription').textContent = course.description;
    document.getElementById('modalCategory').textContent = course.category;
    document.getElementById('modalLevel').textContent = course.level;

    // Update Start Button
    const startBtn = document.getElementById('modalStartBtn');
    startBtn.onclick = () => {
        courseModalInstance.hide();
        showToast('Enrollment Successful', `You have enrolled in: ${course.title}`, 'success');
    };

    // Show Modal
    const modalEl = document.getElementById('courseModal');
    courseModalInstance = new bootstrap.Modal(modalEl);
    courseModalInstance.show();
};

// --- COURSE RENDERING ---
window.renderCourses = (filter = 'All') => {
    const grid = document.getElementById('course-grid');
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
    <div class="card h-100 shadow-sm">
        <div class="position-relative">
            <img src="${course.image}" class="card-img-top img-cover-200" alt="${course.title}">
            <span class="position-absolute top-0 end-0 badge bg-light text-dark m-2 opacity-75 shadow-sm">${course.level}</span>
            ${badgeHtml}
        </div>
        <div class="card-body d-flex flex-column">
        <small class="text-safety-orange fw-bold text-uppercase mb-2">${course.category}</small>
        <h5 class="card-title">${course.title}</h5>
        <p class="card-text text-secondary small flex-grow-1">${course.description}</p>
        
        <div class="d-flex justify-content-between align-items-center text-muted small my-3 pt-3 border-top">
            <span><i class="bi bi-clock me-1"></i> ${course.duration}</span>
            <span><i class="bi bi-layers me-1"></i> ${course.modules} Modules</span>
        </div>

        <button onclick="openCourseModal('${course.id}')" class="btn btn-dark w-100 mt-auto">
            View Module
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

// Initial Render
renderCourses();

// --- CHAT BOT ---
let isChatOpen = false;

window.toggleChat = () => {
    isChatOpen = !isChatOpen;
    const widget = document.getElementById('chat-widget');
    const icon = document.getElementById('chat-icon');
    const btn = document.getElementById('chat-toggle-btn');

    if (isChatOpen) {
        widget.classList.remove('closed');
        icon.classList.remove('bi-chat-dots-fill');
        icon.classList.add('bi-x-lg');
        btn.classList.remove('btn-safety');
        btn.classList.add('btn-dark');
        setTimeout(() => document.getElementById('chat-input').focus(), 300);
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
    // Updated to use CSS class instead of inline style
    bubble.className = `p-2 rounded chat-bubble-width ${role === 'user' ? 'bg-primary text-white' : 'bg-white border text-dark'}`;
    bubble.innerText = text;

    div.appendChild(bubble);
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
}