import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import APP_CONFIG from './app.config';
import { HttpClient } from '@angular/common/http'; 
import { Node, Link } from './d3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'd3-ng5-demo';
  
  nodes: Node[] = [];
  links: Link[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(){   

    var data = this.http.get("./assets/input.json");
    
    data.subscribe(data => {
        console.log(data['actors']);      
    });

    const N = APP_CONFIG.N,
    getIndex = number => number - 1;
    // const N = data["events"].length,
    //        getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= 3; i++) {
        this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= 3; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }

  }  

  // drawCanvas(){
  //   const N = APP_CONFIG.N,
  //   getIndex = number => number - 1;
  //   // const N = data["events"].length,
  //   //        getIndex = number => number - 1;

  //   /** constructing the nodes array */
  //   for (let i = 1; i <= N; i++) {
  //       this.nodes.push(new Node(i));
  //   }

  //   for (let i = 1; i <= N; i++) {
  //     for (let m = 2; i * m <= N; m++) {
  //       /** increasing connections toll on connecting nodes */
  //       this.nodes[getIndex(i)].linkCount++;
  //       this.nodes[getIndex(i * m)].linkCount++;

  //       /** connecting the nodes before starting the simulation */
  //       this.links.push(new Link(i, i * m));
  //     }
  //   }
  // }  
}
