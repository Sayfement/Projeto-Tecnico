import axios from 'axios';

export default class UserModel {

    constructor(email, token) {
        this.email = email;
        this.token = token;
    }

    getEmail() {
        return this.email;
    }
}
