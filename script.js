function addStudent() {
    let n = document.getElementById("name").value;
    let r = document.getElementById("roll").value;
    let c = document.getElementById("course").value;

    if (n == "" || r == "" || c == "") {
        alert("Please fill all fields");
    } else {
        let li = document.createElement("li");
        li.textContent = n + " - " + r + " - " + c;
        document.getElementById("list").appendChild(li);

        document.getElementById("name").value = "";
        document.getElementById("roll").value = "";
        document.getElementById("course").value = "";
    }
}