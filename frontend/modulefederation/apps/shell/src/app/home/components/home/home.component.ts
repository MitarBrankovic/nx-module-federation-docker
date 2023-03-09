import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modulefederation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() { }

  nxs = [{title:"Efficient code reuse", content:"By using Nx workspaces, you can create libraries that can be shared across multiple projects, reducing duplication and increasing consistency."},
        {title:"Better team collaboration", content:"Nx provides a standard project structure and code organization, making it easier for teams to collaborate and share code."},
        {title:"Scalability", content:"Nx workspaces are designed to be scalable, allowing you to easily add new projects and libraries to your workspace as your application grows."}]

  kafkas = [{title:"High throughput", content:"Kafka is optimized for high throughput, making it a great choice for applications that require fast and efficient data processing."},
           {title:"Real-time data processing", content:"Kafka supports real-time data processing and streaming, making it a great choice for applications that require real-time data processing and analytics."},
           {title:"Versatility", content:"Kafka is a versatile message broker that can be used for a variety of use cases, including data processing, real-time analytics, event-driven architectures, and more."}]

  dockers = [{title:"Consistency", content:"Docker containers provide a consistent and reproducible environment for your application, ensuring that it runs the same way on different machines and in different environments."},
            {title:"Isolation", content:"Docker containers provide a high degree of isolation between applications and their dependencies, reducing the risk of conflicts and ensuring that applications can run independently of each other."},
            {title:"Portability", content:"Docker allows you to package your application and all of its dependencies into a single container, making it easy to deploy and run your application across different environments and platforms."}];

  ngOnInit() {
  }

  public executeSelectedChange = (event:any) => {
    console.log(event);
  }
}
