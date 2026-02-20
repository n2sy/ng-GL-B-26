import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  imports: [NgClass],
  templateUrl: './manage-servers.html',
  styleUrl: './manage-servers.css',
})
export class ManageServers {
    allServers = [
        {
            name : "Production Server",
            type : "small",
            date_d : new Date(2024, 4, 5),
            status : "critical"
        },
        {
            name : "Testing Production Server",
            type : "large",
            date_d : new Date(2024, 4, 5),
            status : "stable"
        },
        {
            name : "Testing Experimental Server",
            type : "medium",
            date_d : new Date(2024, 4, 5),
            status : "offline"
        },
        {
            name : "Nidhal Server",
            type : "small",
            date_d : new Date(2024, 4, 5),
            status : "stable"
        },
    ];
    
    affecterClass(serv) {
        return {
            'list-group-item-success' : serv.status == 'stable'  , 
            'list-group-item-danger' : serv.status == 'critical'  ,
            'list-group-item-warning' : serv.status == 'offline'  
    }
}
}
