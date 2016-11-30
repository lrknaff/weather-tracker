 const getLocation = (state = {}, action) => {
   switch (action.type) {
     case 'RECEIVE_LOCATION':
       return Object.assign({}, { latitude: action.coords.latitude, longitude: action.coords.longitude })
     case 'PROMPT_USER':
       return action.permission
     default:
       return state
   }
 }

 export default getLocation
