export const registerNewUser = async (formData) => {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const finalData = await response.json();
    return finalData;
  } catch (e) {
    console.log('Error:', e);
    return {
      success: false,
      message: 'Có lỗi xảy ra khi gọi API',
    };
  }
};
