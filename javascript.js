// Change Content Example
document.getElementById("changeBtn").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Content Changed Successfully!";
});

// Animation Example
document.getElementById("animateBtn").addEventListener("click", function () {
    let box = document.getElementById("box");
    let pos = 0;
    box.style.position = "relative";
    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            box.style.left = pos + "px";
        }
    }
});

// Form Validation Example
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("formMessage").innerHTML = "Name cannot be empty!";
        document.getElementById("formMessage").style.color = "red";
    } else {
        document.getElementById("formMessage").innerHTML = "Form submitted successfully!";
        document.getElementById("formMessage").style.color = "green";
    }
});

// --- Simulation (setTimeout) ---
document.getElementById("simulateBtn").addEventListener("click", function () {
    document.getElementById("simulateData").innerHTML = "Loading data...";

    setTimeout(() => {
        document.getElementById("simulateData").innerHTML = "Here is the fetched data!";
    }, 2000); // waits 2 seconds
});

// --- Real Fetch API ---
document.getElementById("fetchBtn").addEventListener("click", function () {
    document.getElementById("fetchData").innerHTML = "Loading data...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("fetchData").innerHTML =
                "<b>Title:</b> " + data.title + "<br><b>Body:</b> " + data.body;
        })
        .catch(error => {
            document.getElementById("fetchData").innerHTML = "Error fetching data!";
            console.error(error);
        });
});

