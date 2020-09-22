import axios from 'axios';


class DataService {

    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()) {
        this.url = url;
        this.client = client;

    }

    getToken() {
        return JSON.parse(localStorage.login).result.token
    }

    registerUser(userData) {
        
        return this.client.post(this.url + "/users", userData)
        .then(response => console.log(response))
        .catch(error => console.log(error))

    }
  
      // Authorization can be done by attaching a header to the Axios config
    // axios.request(url, data, config)
    // copy the line below and use it as the config parameter
    // {headers: {Authorization: `Bearer ${this.getToken()}`}}
    postMessage(message) {
        return this.client.post(this.url + "/messages", message,
            {headers: {Authorization: `Bearer ${this.getToken()}`}})
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }


    getUsers() {
        return this.client.get(this.url + "/users")
        .catch(error => console.log(error))
    }

    getSingleUser(userName) {
        return this.client.get(this.url + "/users", userName);
    }

    getUsersPicture() {
        return this.client.get(this.url + "/users/{props.username}/picture");
    }

    setUsersPicture(uploadPicture) {
        return this.client.get(this.url + "/users/{props.username}/picture", uploadPicture);
    }
    getMessages() {
        return this.client.get(this.url + "/messages?limit=8")
    }
   
      
}
export default DataService;