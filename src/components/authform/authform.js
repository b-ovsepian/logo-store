// const postToAdd = {
//   author: 'Mango',
//   content: 'CRUD is awesome',
// };

const postToAdd =
{
    "email": "olha11111@gmail.com",
    "password": "Olha11111"
};



function authorization() {
    const url = 'https://goit-store.herokuapp.com/auth/registration';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(postToAdd),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        
    }).then(response => console.log(response.json()));

};

authorization();