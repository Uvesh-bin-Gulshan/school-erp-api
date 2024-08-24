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


export const submitForm = async (url:any,data:any,method:string) => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      console.log(response)
   if(response.ok){
    return{success:true}
   }else{
    return{success:false}
   }
  
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  