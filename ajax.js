const axios = require('axios');

const url = 'https://noteswithdarrell.firebaseio.com/notes.json'

const note = { text: 'here is a note'};

// axios.post(url, note)
//     .then(result => {
//         console.log(result.data);
//     }, err => {
//         console.log(err);
//     })

// const deleteUrl = 'https://noteswithdarrell.firebaseio.com/notes/-KLS3JFHR24XaDwDsNoC.json'

// axios.delete(deleteUrl)
//     .then(result => {
//         console.log(result.data);
//     }, err => {
//         console.log(err);
//     })
    
const editUrl = 'https://noteswithdarrell.firebaseio.com/notes/-KKJlNqYcQ2OVH2hqWBy.json';

//axios.put(editUrl, { text: 'Edited Note'})
 //   .then(result => {
      //  console.log(result.data);
 //   }, err => {
     //   console.log(err);
    //})
    

console.log('before get request..')

const myPromise = axios.get(url);

myPromise.then (result => {
 console.log('first response');
})

axios.get(url)
 .then (result => {
 console.log('second response');
})

console.log('after get request..' )
    
print('1st')    
isValidUser = axios.get(isValidUserUrl);
print('2nd')  
if (isValidUser){
 print('3rd')  
 userGroups = axios.get(userGroupUrl);
 if (userGroups contains 'admin'){
  axios.post (someUrl, 'message');
 }
}
    
axios.get(isValidUserUrl)
 .then ( result => {
   // handle result
   return axios.get(UserGroupUrl);
 })
 .then ( result => {
  // handle user groups
  return axios.post(UserMessageUrl,{message})
 })
 .then ( result => {
  // handle successful message
 })
 .catch ( err => {
   // handle some err
 })
    
// axios.get(isValidUserUrl)
//  .then (result => {
//    // { isValid: true }
//    axios.get(UserGroupUrl)
//     .then(result => {
//       // { groups: ['user', 'admin'] }
          // if('user' === 'admin') {
           // axios.post(UserMessageUrl,{message})
              // .then(result)...
         // }
//    })
// })
    
    
// axios.get(url)
//     .then(result => {
//         console.log(result.data);
//     }, err => {
//         console.log(err);
//     })

    