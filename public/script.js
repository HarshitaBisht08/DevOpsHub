async function checkStatus() {
    const status = document.getElementById("status");

    try {
        const response = await fetch("/api/status");
        const data = await response.json();

        status.textContent = data.message;
    } catch (error) {
        status.textContent = "API connection failed";
        console.error(error);
    }
}