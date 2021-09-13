// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const getPosts = () => {
  //debugger;
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const addPost = (data) => {
  console.log(data)
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify(data),

  })
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};


export const deletePost = (data) => {
  //debugger;
  return fetch(`https://jsonplaceholder.typicode.com/posts/${data}`, {
    method: 'delete'
  })
    .then((response) => {
      console.log('api delete')
      console.log(response)
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => Promise.reject(error));
};

export const updatePost = (data) => {
  // debugger;
  return fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log('update api');
      console.log(response)
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => Promise.reject(error));
};

