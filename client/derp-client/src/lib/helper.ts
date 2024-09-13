"use server";

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


export const submitForm = async (url: string, data: object, method: string) => {
  try {
    // Ensure the data is a plain object
    const plainData = JSON.parse(JSON.stringify(data));

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plainData),
    });

    const responseData = await response.json();

    if (response.ok) {
      // Assuming the backend returns a 'message' field in the response
      return { success: true, message: responseData.message || 'Form submitted successfully!' };
    } else {
      return { success: false, message: responseData.message || 'Failed to submit form' };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'An error occurred while submitting the form' };
  }
};

