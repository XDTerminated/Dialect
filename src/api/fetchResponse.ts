// src/api/fetchResponse.ts

export interface ApiResponse {
    content: any;
    success: boolean;
    data?: any;
    error?: string;
}

export const fetchResponse = async (text: string): Promise<ApiResponse> => {
    // Construct the prompt with the custom format
    const prompt = `Translate the following  text  into how donal trump would say it (I only want the translated text and nothing else.): "${text}"`;

    const response = await fetch(`http://127.0.0.1:8000/bedrock/call-bedrock/?prompt=${encodeURIComponent(prompt)}`);

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const data: ApiResponse = await response.json();
    return data;
};
