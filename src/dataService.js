//import the axios HTTP client to communicate with the API
import axios from "axios"
import { store } from "./redux";


class DataService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }

    getLoginData(){
        return store.getState().auth.login.result
    }

    getUsername=() =>{
        const { username} = store.getState().auth.login.result
        return username || null
    }

    getToken = () =>{
        const { token} = store.getState().auth.login.result
        return token || null
    }



    registerUser(registrationData){
        return this.client.post(this.url + "/users", registrationData);
    }

    getRecentMessages = ()  =>{
        return this.client
        .get(this.url +"/messages?limit=20")
        .then(response => response.data.messages)
        }
        
    postLike = messageId =>{
        console.log ("likes clicked")
        const requestBody = {messageId}
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}`,            
        },
    }    
    return this.client
    .post(this.url + "/likes", requestBody, config)
    .then(response =>response.data.like)
        
    
    }

}

export default DataService;