import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username: string;
    private client_id = 'b7defda529a127e41493';
    private client_secret = '23c7f18825e1e3d4bb3cc184ca7beb214818c123';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'classicmike';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
        console.log(this.username);
    }
}