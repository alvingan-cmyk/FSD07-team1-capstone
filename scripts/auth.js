// Function to authenticate the user via site's JWT token
function isAuthenticated(){

    const token = window.localStorage.getItem(_USERTOKEN);          // Retrieve usertoken from local storage
    
    const expired = isTokenExpired(token);                          // Check the token's expiry 
    
    if(expired)                                                     // If expired, return (false)
        return;

    return token;                                                   // Else return token (usertoken)
}

// Function to check if the token has expired
function isTokenExpired(token) {                                    

    if (!token) return true;                                        // Return true if token passed in is undefined 

    const payload = JSON.parse(atob(token.split('.')[1]));          // Decode the JWT token (a base64-encoded JSON payload)

    const expirationTime = payload.exp;                             // Get the expiration time from the token payload

    const currentTime = Math.floor(Date.now() / 1000);              // Current time in seconds

    return expirationTime < currentTime;                            // Return true ONLY when currentTime is LESS THAN token's expirationTime
}

// Function to decode the user's email from the parameter
function decodeUser(token){                                         
    
    // !! Extract authenticated user's email from the token
    const arrToken = token.split(".");                              
    const decodedToken = JSON.parse(window.atob(arrToken[1]));
    const email = decodedToken.sub;                                  // email
    const firstName = decodedToken.firstName;                        // firstName
    const lastName = decodedToken.lastName;                          // lastName
    const roles = decodedToken.roles;                                // role
    return {email: email, 
            firstName: firstName, 
            lastName: lastName,
            roles: roles,
        };

}

// !! async / await
// !! functions return results wrapped in a resolved Promise; for any errors, a 'reject' Promise is returned 
// !! In an async function, await pauses execution for the function until a Promise is resolved/rejected. 

// Funtion to login
async function login(formData = {}){
    
    if(Object.entries(formData).length === 0)                                               // Return if the object is empty
        return;

    
    try {                                                                                   // !! Try/catch block (exception handling) to send data to login enpoint
        const response = await fetch(_ENDPOINT_LOGIN, {                                     // !! DONE: API call for Authentication
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });

        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));      // TODO: remove simulated delay when endpoint is instated
        await sleep(2000);
      
        if(response.ok){                                                                    // If response status == 200 (ok)
            const result = await response.json();
            const token = result.token;                                                   
            const user = decodeUser(token);                                                 // decode the token for the role 
            window.localStorage.setItem(_USERTOKEN, token);                                 // Store the string in localStorage with the key 'usertoken'
            
            const trainerStatus = user.roles.some(role => role.authority === 'TRAINER');        // !! Find "ADMIN" authority from token's roles
            
            if(trainerStatus)                                                                 // !! This example only look for "ADMIN" authority
                window.location = _TRAINER_PROFILE_URL;                                               // Redirect the user to adminpage
            else                                                                            // !! Other authority will be deemed as user
                window.location = _TRAINEE_PROFILE_URL;                                               // Redirect the user to homepage
        }
        
        return;                                                                             // Else return false

    } catch (error) {
        console.log("Exception error gotten is: ", error.message);
        return;
    }
    
}

// Function to logout
function logout(logout){
    window.localStorage.removeItem(_USERTOKEN);                                             // Store the string in localStorage with the key 'token'
    window.location = _HOME_URL;                                                            // Redirect the user to homepage
}

// Function to signup
async function signup(formData = {}){

    if(Object.entries(formData).length == 0)
        return;

    /* We are are sending 
        - userName
        - email
        - password
        - role (it must be passed only by our web site)
        - Spring Boot help us take care of CSRF Cross-site Referece Forgery
    */

    try {
        
        const response = await fetch(_ENDPOINT_REGISTER, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })

        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));      // TODO: remove delay when endpoint is instated
        await sleep(2000);

        if(response.ok){
            window.location = _LOGIN_URL;
        }

        return;

    } catch (error) {
        console.log("Exception error gotten is:", error.message);
        return;
    }

}

// Function to updateProfile
async function updateProfile(formData = {}, file = null){

    if(Object.entries(formData).length == 0)
        return;

    const token = isAuthenticated();
    if(!token)
    {
        window.location = "index.html";
    }

    
    try {                                                                                   

        // Create an Object called 'updatedData' to send via fetch api
        let updateData = new FormData();
        updateData.append("data", JSON.stringify(formData));
        updateData.append("file", file);
        
        const response = await fetch(_ENDPOINT_UPDATEPROFILE, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: updateData
        });

        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));      // TODO: remove delay when endpoint is instated
        await sleep(2000);
      
        if(response.ok){ 
            const result = await response.json();
            const newToken = result.token;                                                   

            window.localStorage.removeItem(_USERTOKEN);
            window.localStorage.setItem(_USERTOKEN, newToken);

            const path = window.location.href.split('?')[0];                                // get the current location without the querystring
            const url = path + "?updated=true";                                             // append the querystring with updated=true
            window.location = url;                                                          // refresh the current web page
        }else{
            const err = await response.json();                                              // obtain the error response
            throw new Error(err);                                                           // throw error if unable to perform fetch request
        }

    } catch (err) {
        console.log("Exception error gotten is: ", err);
        return;
    }
}

// Function to manage navigation bar user information
document.addEventListener('DOMContentLoaded', () => {
    
    const initials = document.getElementById("navInitials");
    const firstName = document.getElementById("navFirstName");
    const lastName = document.getElementById("navLastName");
    
    try {

        // ensure that user is authenticated
        const token = isAuthenticated();

        if(token){
            
            const user = decodeUser(token);                                     // extract and populate the user profile
            initials.textContent = `
                ${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;
            firstName.textContent = user["firstName"];
            lastName.textContent = user["lastName"];

            const navbarItems = document.querySelectorAll(".navbar-nav .nav-item");
            navbarItems.forEach((listItem, key) => {
                (key == 3 || key == 4) && listItem.remove();                    // hide the signup or login from navigation bar
            });


        }else{
            
           throw new Error();                                                   // throw a new error (user is not logged in)
        }

    } catch (error) {
        
        const navbarItems = document.querySelectorAll(".navbar-nav .nav-item");
        navbarItems.forEach((listItem, key) => {
            (key == navbarItems.length - 1) && listItem.remove();               // hide the authentication if not logged in
        });

    }

    // operates the logout functionality
    const btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", () => {
        logout();
    })

});