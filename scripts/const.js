// correspononding site pages' links
const _HOME_URL = "index.html";                         // ✅
const _ABOUT_URL = "#";
const _CONTACT_URL = "contact.html";
const _LOGIN_URL = "auth.html";                         // ✅
const _ENROLLED_URL = "enrolled.html";                  // ✅
const _COURSE_URL = "course.html";                      // ✅
const _TRAINER_PROFILE_URL = "trainer-board.html"; 
const _TRAINEE_PROFILE_URL = "trainee-board.html"; 

// token name
const _USERTOKEN = "usertoken";
const _HOST = "http://localhost:"
const _PORT = "8088"

// endponts
const _ENDPOINT_REGISTER = _HOST + _PORT + "/api/v1/public/signup";                           // ✅
const _ENDPOINT_LOGIN = _HOST + _PORT + "/api/v1/public/signin";                              // ✅
const _ENDPOINT_PUBLIC_COURSES = _HOST + _PORT + "/api/v1/courses";                           // ✅
const _ENDPOINT_PUBLIC_COURSE = _HOST + _PORT + "/api/v1/courses/";                           // ✅
const _ENDPOINT_PUBLIC_MODULES = _HOST + _PORT + "/api/v1/courses";                           // ✅
const _ENDPOINT_RESTRICTED_ENROLLMENT = _HOST + _PORT + "/api/v1/enrollments";                // ✅
const _ENDPOINT_RESTRICTED_CREATE_ENROLLMENT = _HOST + _PORT + "/api/v1/enrollments/create";  // ✅
const _ENDPOINT_RESTRICTED_ENROL_STATUS = _HOST + _PORT + "/api/v1/enrollments/";             // ✅
const _ENDPOINT_TRAINEE_COMPLETION = _HOST + _PORT + "/api/v1/progress/trainee/";             // to add: {traineeId}/complete      
const _ENDPOINT_PROFILE = _HOST + _PORT + "/api/v1/user/profile";
const _ENDPOINT_UPDATEPROFILE = _HOST + _PORT + "/api/v1/user/update";