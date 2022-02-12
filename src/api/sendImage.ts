const API_URL = 'https://front-exercise.z1.digital';

type APIResponseType = {
  summary: { outcome: string };
};

export const sendImage = async (image: string) => {
  return new Promise<APIResponseType>(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_URL}/evaluations`, {
        method: 'POST',
        body: JSON.stringify({ image: image }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        response.json().then((data) => {
          resolve(data);
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
