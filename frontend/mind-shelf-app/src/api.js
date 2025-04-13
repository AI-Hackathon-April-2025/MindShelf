// const API_BASE_URL=import.meta.env.BACKEND_URL
const API_BASE_URL = "http://localhost:4000/api"

console.log(API_BASE_URL)

export const fetchLatestMindfiles = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/getSummary?userId=101`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching latest mindfiles:', error);
        throw error;
    }
};

export const summarizeAndStoreLink = async (resource) => {
    try {
        const response = await fetch(`${API_BASE_URL}/summarize?userId=101`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ resource }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
        window.location.reload()
    } catch (error) {
        console.error('Error summarizing and storing link:', error);
        throw error;
    }
};

export const searchMindfiles = async (prompt) => {
    try {
        const response = await fetch(`${API_BASE_URL}/search?userId=101`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error searching mindfiles:', error);
        throw error;
    }
};