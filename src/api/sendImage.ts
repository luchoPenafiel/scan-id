type APIResponseType = {
  summary: { outcome: string };
};

export const sendImage = async (image: string) => {
  return new Promise<APIResponseType>((resolve, reject) => {
    fetch('https://front-exercise.z1.digital/evaluations', {
      method: 'POST',
      body: JSON.stringify({ image: image }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response: Response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resolve(data);
          });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
