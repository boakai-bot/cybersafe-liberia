/* =====================================
   CYBERSAFE LIBERIA
   MAIN JAVASCRIPT
===================================== */


/* =====================================
   DASHBOARD CLOCK
===================================== */

function updateDashboardTime() {

    const now = new Date();

    const time =
        now.toLocaleTimeString();

    const date =
        now.toLocaleDateString();

    document.getElementById("dashboard-time").textContent =
        date + " " + time;

    document.getElementById("last-update").textContent =
        time;
}

setInterval(updateDashboardTime, 1000);

updateDashboardTime();


/* =====================================
   LOGIN
===================================== */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("active");
}

function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("active");
}


document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const result =
            document.getElementById("loginResult");

        if (email) {

            result.textContent =
                "Demo login successful. Your account system will be connected to a secure backend later.";

            result.style.color = "#19d37b";

            document.getElementById("dashboard-user").textContent =
                email.split("@")[0];

        }

    });


/* =====================================
   REGISTER
===================================== */

function openRegister() {

    document
        .getElementById("registerModal")
        .classList.add("active");
}

function closeRegister() {

    document
        .getElementById("registerModal")
        .classList.remove("active");
}


document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("registerName").value;

        const result =
            document.getElementById("registerResult");

        localStorage.setItem(
            "cybersafeUser",
            name
        );

        document.getElementById("dashboard-user").textContent =
            name;

        result.textContent =
            "Account created for this demo. A real secure database will be connected in the next phase.";

        result.style.color =
            "#19d37b";

    });


/* =====================================
   COURSE SYSTEM
===================================== */

let coursesStarted =
    Number(localStorage.getItem("coursesStarted")) || 0;


function startCourse(courseName) {

    coursesStarted++;

    localStorage.setItem(
        "coursesStarted",
        coursesStarted
    );

    document.getElementById("course-count").textContent =
        coursesStarted;

    showToast(
        "Course started: " + courseName
    );

}


/* Load saved course count */

document.getElementById("course-count").textContent =
    coursesStarted;


/* =====================================
   INCIDENT REPORT
===================================== */

let reportsSubmitted =
    Number(localStorage.getItem("reportsSubmitted")) || 0;


document
    .getElementById("reportForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const result =
            document.getElementById("reportResult");

        reportsSubmitted++;

        localStorage.setItem(
            "reportsSubmitted",
            reportsSubmitted
        );

        document.getElementById("report-count").textContent =
            reportsSubmitted;

        result.textContent =
            "Your report has been recorded in this browser demo. Do not include passwords or other highly sensitive credentials.";

        this.reset();

    });


document.getElementById("report-count").textContent =
    reportsSubmitted;


/* =====================================
   CHAT
===================================== */

function openChat() {

    document
        .getElementById("chatModal")
        .classList.add("active");

}

function closeChat() {

    document
        .getElementById("chatModal")
        .classList.remove("active");

}


document
    .getElementById("chatForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const input =
            document.getElementById("chatText");

        const messages =
            document.getElementById("chatMessages");

        const text =
            input.value.trim();

        if (!text) {
            return;
        }


        const userMessage =
            document.createElement("div");

        userMessage.className =
            "message sent";

        userMessage.textContent =
            text;

        messages.appendChild(
            userMessage
        );


        input.value = "";


        setTimeout(function() {

            const response =
                document.createElement("div");

            response.className =
                "message received";

            response.textContent =
                "Thank you. This is currently a demonstration chat. A real-time support system will be connected in a later phase.";

            messages.appendChild(
                response
            );

            messages.scrollTop =
                messages.scrollHeight;

        }, 700);

    });


/* =====================================
   SOCIAL MEDIA
===================================== */

function socialMessage(platform) {

    event.preventDefault();

    showToast(
        platform +
        " social media link will be connected here."
    );

}


/* =====================================
   COURSE TOAST
===================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent =
        message;

    toast.classList.add("show");

    setTimeout(function() {

        toast.classList.remove("show");

    }, 3000);

}


/* =====================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
===================================== */

window.addEventListener(
    "click",
    function(event) {

        const loginModal =
            document.getElementById("loginModal");

        const registerModal =
            document.getElementById("registerModal");

        const chatModal =
            document.getElementById("chatModal");


        if (event.target === loginModal) {

            closeLogin();

        }


        if (event.target === registerModal) {

            closeRegister();

        }


        if (event.target === chatModal) {

            closeChat();

        }

    }
);


/* =====================================
   LOAD SAVED USER
===================================== */

const savedUser =
    localStorage.getItem("cybersafeUser");

if (savedUser) {

    document.getElementById(
        "dashboard-user"
    ).textContent = savedUser;

}
