const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
  'Authorization': 'whatever-you-want'
}

//obtener todas las cartegorias
export const getCategories = () => 
fetch( `${api}/categories`, { headers } )
  .then( res => res.json() )
  .then( data => data );

//obtener todos los post la categoria dada
export const getPostbyCategories = ( category ) => 
fetch( `${api}/${category}/posts`, { headers } )
  .then( res => res.json() )
  .then( data => data );

//obtener todos los posts
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then( res => res.json())
    .then(data => data);


//crear un nuevo post
export const createPost = (body) => 
  fetch( `${api}/posts` ,{ 
    method: 'POST', 
    headers: { 
      ...headers,
      'Content-Type' : 'application/json' 
    }, 
    body: JSON.stringify(body)
  }).then( res => res.json() );


//obtener detalle de un post
export const getPostsDetails = (id) =>
fetch(`${api}/posts/${id}`, { headers })
  .then( res => res.json() )
  .then( data => data );

//votar por un post 
export const votePost = (id, vote) =>
  fetch(`${api}/posts/${id}`, { 
    method: 'POST', 
    headers: { 
      ...headers,
      'Content-Type' : 'application/json' 
    }, 
    body: JSON.stringify(vote = {option: vote})
  }).then( res => res.json())
    .then( data => data )


//Editar un post
export const editPost = (id, body) =>
fetch(`${api}/posts/${id}`, { 
  method: 'PUT', 
  headers: { 
    ...headers,
    'Content-Type' : 'application/json' 
  }, 
  body: JSON.stringify(body)
}).then( res => res.json())

//Delete un post
export const deletePost = (id, body) =>
fetch(`${api}/posts/${id}`, { 
  method: 'DELETE', 
  headers: { 
    ...headers,
    'Content-Type' : 'application/json' 
  }
}).then( res => res.json())

//obtener todos los comentarios de un post
export const getCommentByPost = (id) =>
fetch(`${api}/posts/${id}/comments`, { headers })
  .then( res => res.json())
  .then(data => data);

//Agregar un comentario a un post
//verificar: POST /comments
export const addComment = (body) =>
fetch(`${api}/comments`, { 
  method: 'POST', 
  headers: { 
    ...headers,
    'Content-Type' : 'application/json' 
  }, 
  body: JSON.stringify(body)
}).then( res => res.json())

//obtener el detalle de un comentario
export const getCommentDetails  = (id) =>
fetch(`${api}/comments/${id}`, { headers })
  .then( res => res.json())
  .then(data => data);

//falta: POST /comments/:id
export const voteAComment = (id, vote) => 
fetch(`${api}/comments/${id}`, { 
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type':'application/json'
  },
  body: JSON.stringify(vote = {option: vote})
}).then( res => res.json())
  .then(data => data);

//Editar el detalle de un comentario
export const editComment = (id, body) =>
fetch(`${api}/comments/${id}`, { 
  method: 'PUT', 
  headers: { 
    ...headers,
    'Content-Type' : 'application/json' 
  }, 
  body: JSON.stringify(body)
}).then( res => res.json())

//eliminar comentario, cambiar flag a true
export const deleteComment = (id) =>
fetch(`${api}/comments/${id}`, { 
  method: 'DELETE', 
  headers: { 
    ...headers,
    'Content-Type' : 'application/json' 
  }
}).then( res => res.json())