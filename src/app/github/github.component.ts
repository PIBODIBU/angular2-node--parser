import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';
import {Repository} from './repository';

@Component({
  selector: 'app-root',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  repos: Repository[] = [];
  username: string;

  constructor(private githubService: GithubService) {
    this.username = '';
  }

  ngOnInit() {
  }

  fetchData() {
    this.repos = [];
    this.githubService.getRepositories(this.username).subscribe(data => this.jsonToModel(data));
  }

  jsonToModel(json): void {
    for (const item of json) {
      this.repos.push(JSON.parse(JSON.stringify(item)));
    }
  }
}
