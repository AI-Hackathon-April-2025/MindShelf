const Backend_URL = 'Backend_URL';

export const fetchLatestMindfiles = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/fetchLatest`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching latest mindfiles:', error);
        throw error;
    }
};

export const summarizeAndStoreLink = async (link) => {
    try {
        const response = await fetch(`${API_BASE_URL}/summarize`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ link }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error summarizing and storing link:', error);
        throw error;
    }
};

export const searchMindfiles = async (prompt) => {
    try {
        const response = await fetch(`${API_BASE_URL}/search`, {
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
        return data;
    } catch (error) {
        console.error('Error searching mindfiles:', error);
        throw error;
    }
};