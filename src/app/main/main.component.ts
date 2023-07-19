import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    
	constructor(private http: HttpClient) { }

	// constructor(private router: Router) { }


	fetchUsers() {
		this.http.get('https://gorest.co.in/public-api/users?access-token=17b6a794b560a81f735cd3e4aaead562731031ff00694722fed5537ad3e98ffb').subscribe((data: any) => {
			this.users = data.data;
			console.log(data)
		});
	}


	ngOnInit() {
		this.fetchUsers();
	}

	users: any[] = [];

	// redirectToDetails() {
  	// 	this.router.navigate(['/details']);
	// }

	

}
