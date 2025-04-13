
document.addEventListener("DOMContentLoaded", () => {
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
        const link = input.value;
        console.log("🔗 Would save to API:", link);
        const res = await fetch("<api for summarize>", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ link })
        });

        if (res.ok) {
            saveBtn.textContent = "Saved!";
        } else {
            alert("Failed to save.");
        }
    })
});
