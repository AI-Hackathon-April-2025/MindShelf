
document.addEventListener("DOMContentLoaded", () => {
    const inputUser = document.getElementById("userId");
    const input = document.getElementById("linkInput");
    const saveBtn = document.getElementById("saveBtn");

    // Autofill current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (tab && tab.url) {
            input.value = tab.url;
        }
    });

    // Send the link to your API
    saveBtn.addEventListener("click", async () => {
        const resource = input.value;
        const userId= inputUser.value
        console.log("🔗 Would save to API:", resource);
        const res = await fetch(`http://localhost:4000/api/summarize?userId=${userId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ resource })
        });

        if (res.ok) {
            saveBtn.textContent = "Saved!";
        } else {
            alert("Failed to save.");
        }
    })
});
