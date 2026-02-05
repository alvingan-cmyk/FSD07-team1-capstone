// import { GoogleGenAI } from "@google/genai";

// --- DATA ---
let SAMPLE_COURSES = [];

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

    // Update Modal Content
    const modalTitle = document.getElementById('modalTitle');
    if(modalTitle) modalTitle.textContent = course.title;
    
    const modalImage = document.getElementById('modalImage');
    if(modalImage) modalImage.src = course.image;
    
    const modalDesc = document.getElementById('modalDescription');
    if(modalDesc) modalDesc.textContent = course.description;
    
    const modalCat = document.getElementById('modalCategory');
    if(modalCat) modalCat.textContent = course.category;
    
    const modalLevel = document.getElementById('modalLevel');
    if(modalLevel) modalLevel.textContent = course.level;

    // Update Start Button
    const startBtn = document.getElementById('modalStartBtn');
    if(startBtn) {
        startBtn.onclick = () => {
        if(courseModalInstance) courseModalInstance.hide();
        window.location.href = `course.html?id=${course.id}`;
        };
    }

    // Show Modal
    const modalEl = document.getElementById('courseModal');
    if(modalEl) {
        courseModalInstance = new bootstrap.Modal(modalEl);
        courseModalInstance.show();
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

    const courseImage = _HOST + _PORT + "/" + course.imageUrl;
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="position-relative">
                <img src="${courseImage}" class="card-img-top" alt="${course.title}" style="height: 200px; object-fit: cover;">
                <span class="position-absolute top-0 end-0 badge bg-light text-dark m-2 opacity-75 shadow-sm">${course.level}</span>

            </div>
            <div class="card-body d-flex flex-column">
            <small class="text-safety-orange fw-bold text-uppercase mb-2">${course.categoryName}</small>
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text text-secondary small flex-grow-1">${course.description}</p>
            
            <div class="d-flex justify-content-between align-items-center text-muted small my-3 pt-3 border-top">
                <span><i class="bi bi-clock me-1"></i> ${course.duration} min</span>
                <span><i class="bi bi-person-fill me-1"></i>
                <span class="fw-bold">Trainer:</span> 
                ${course.trainerName}</span>
            </div>

            <a href="${_COURSE_URL}?id=${course.id}" class="btn btn-dark w-100 mt-auto" style="background-color: #1A202C;">
                View Module
            </button>
            </a>
        </div>
        `;
    grid.appendChild(col);
    });
};

window.filterCourses = (category) => {
    renderCourses(category);
};

// --- PAGE SPECIFIC INIT ---
document.addEventListener('DOMContentLoaded', async () => {

    // Start: Fetch all courses from API to populate SAMPLE_COURSES
        /* Start fetching courses */
    const response = await fetch(_ENDPOINT_PUBLIC_COURSES, { method: "GET" });

    const results = await response.json();
    
    SAMPLE_COURSES = [...results.content];
    // End: Fetch all courses from API to populate SAMPLE COURSES

    // 1. Landing Page Init
    if (document.getElementById('course-grid')) {
        renderCourses();
    }

    // // 2. Dashboard Page Init
    // if (document.getElementById('dashboard-course-list')) {
    //     renderDashboardCourses();
    // }

    // // 3. Search Page Init
    // if (document.getElementById('search-results-container')) {
    //     // Parse URL params for query
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const query = urlParams.get('q');
        
    //     // Update display
    //     const displayEl = document.getElementById('search-query-display');
    //     if (displayEl && query) {
    //         displayEl.textContent = `Search Results for: "${query}"`;
    //     }
        
    //     // Render search results
    //     renderSearchResults(query);
        
    //     // Attach filter button handler
    //     const filterBtn = document.getElementById('apply-filters-btn');
    //     if (filterBtn) {
    //         filterBtn.addEventListener('click', applySidebarFilters);
    //     }
    // }

    // // 4. Course Detail Page Init
    // if (document.getElementById('course-detail-container')) {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const courseId = urlParams.get('id');
    //     if (courseId) {
    //         renderCourseDetail(courseId);
    //     }
    // }
});

// Initial Render if grid exists
if (document.getElementById('course-grid')) {
    renderCourses();
}

// --- CHAT BOT ---
let isChatOpen = false;

window.toggleChat = () => {
    isChatOpen = !isChatOpen;
    const widget = document.getElementById('chat-widget');
    const icon = document.getElementById('chat-icon');
    const btn = document.getElementById('chat-toggle-btn');
    const input = document.getElementById('chat-input');

    if (!widget) return;

    if (isChatOpen) {
    widget.classList.remove('closed');
    if(icon) {
        icon.classList.remove('bi-chat-dots-fill');
        icon.classList.add('bi-x-lg');
    }
    if(btn) {
        btn.classList.remove('btn-safety');
        btn.classList.add('btn-dark');
    }
    if(input) setTimeout(() => input.focus(), 300);
    } else {
    widget.classList.add('closed');
    if(icon) {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-chat-dots-fill');
    }
    if(btn) {
        btn.classList.remove('btn-dark');
        btn.classList.add('btn-safety');
    }
    }
};

window.handleChatKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
};

window.sendMessage = async () => {
    const input = document.getElementById('chat-input');
    const msgContainer = document.getElementById('chat-messages');
    
    if(!input || !msgContainer) return;

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

    const loadingEl = document.getElementById(loadingId);
    if (loadingEl) loadingEl.remove();
    appendMessage('bot', response.text || "I couldn't process that.");

    } catch (error) {
    console.error(error);
    const loadingEl = document.getElementById(loadingId);
    if (loadingEl) loadingEl.remove();
    appendMessage('bot', "System offline. Please check your connection.");
    } finally {
    input.disabled = false;
    input.focus();
    }
};

function appendMessage(role, text) {
    const msgContainer = document.getElementById('chat-messages');
    if(!msgContainer) return;

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
