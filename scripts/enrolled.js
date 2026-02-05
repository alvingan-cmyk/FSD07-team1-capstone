// --- PAGE SPECIFIC INIT ---
document.addEventListener("DOMContentLoaded", async() => {
    // ... existing landing/search/dashboard init code ...    

    // Start: Fetch course from API to store in ENROLLED COURSE
    /* Start fetching courses */

    // 1. Get the ID from the URL as well (better for tracking)
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id") || "no-id";

    // 2. Perform the fecthc request
    const response = await fetch(`${_ENDPOINT_PUBLIC_COURSE}${courseId}`, { method: "GET" });
    const course = await response.json();

    // End: Fetch all courses from API to store in ENROLLED COURSE

    // 3. NEW: Enrolled Player Page Init (The one with the sidebar list)
    // Check for the lesson-list ID to confirm we are on enrolled.html
    if (document.getElementById("lesson-list")) {
        renderEnrolledPage(course);
    }
});

async function renderEnrolledPage(course = null) { 
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");

    if (!course) {
        console.error("Course not found for ID:", courseId);
        const list = document.getElementById("lesson-list");
        if (list)
            list.innerHTML =
                '<li class="list-group-item">Course details not found.</li>';
        return;
    }

    // Update Titles and Descriptions on the page
    const titleEl = document.getElementById("dynamic-course-title");
    const descEl = document.getElementById("dynamic-course-description");
    if (titleEl) titleEl.textContent = course.title;
    if (descEl) descEl.textContent = course.description;

    // Update Sidebar Header
    const lessonHeader = document.getElementById("lesson-count-header");
    if (lessonHeader) {
        lessonHeader.textContent = `Lesson Duration: (${course.duration} min)`;
    }

    // Render the modules into the Sidebar List

    const response = await fetch(`${_ENDPOINT_PUBLIC_COURSES}/${course.id}/modules`, { method: "GET" });

    const modules = await response.json();
    console.log(modules);
    
    const lessonList = document.getElementById("lesson-list");
    if (lessonList) {
        lessonList.innerHTML = "";

        modules.forEach((module, index) => {
            const li = document.createElement("li");
            li.className =
                "list-group-item d-flex justify-content-between align-items-center py-3 lesson-item";
            li.style.cursor = "pointer";

            li.innerHTML = `
                <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary fw-bold small">${(index + 1).toString().padStart(2, "0")}</div>
                    <div>
                        <div class="fw-semibold small mb-0">${module.title}</div>
                        <div class="text-muted" style="font-size: 0.75rem;">Video Lesson</div>
                    </div>
                </div>
                <i class="bi bi-play-circle-fill text-primary fs-5"></i>
            `;

            // Inside your loop in renderEnrolledPage()
            li.onclick = () => {
                // ... (keep your toast and title code)

                const videoPlaceholder = document.getElementById('video-placeholder');
                if (videoPlaceholder) {
                    // Check if videoUrl actually exists in your data
                    if (module.videoUrl) {
                        videoPlaceholder.innerHTML = `
                <video controls autoplay class="w-100 h-100 rounded shadow" style="background: black;">
                    <source src="${module.videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
                    } else {
                        // Fallback if videoUrl is missing from your data array
                        videoPlaceholder.innerHTML = `
                <div class="d-flex flex-column align-items-center justify-content-center text-white p-4 text-center">
                    <i class="bi bi-exclamation-triangle fs-1 mb-3 text-warning"></i>
                    <h3 class="mb-3">Video Not Found</h3>
                    <p class="opacity-75">No video file path defined for: ${module.title}</p>
                </div>
            `;
                        console.error("Error: videoUrl is undefined for module:", module.title);
                    }
                }

                // ... (keep your highlighting code)

                // ===========================

                document.querySelectorAll('.lesson-item').forEach(el => el.classList.remove('bg-light', 'border-primary', 'border-start', 'border-4'));
                li.classList.add('bg-light', 'border-primary', 'border-start', 'border-4');
            };

            lessonList.appendChild(li);
        });
    }
}
