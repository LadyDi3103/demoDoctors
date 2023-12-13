
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/shared-components/sidebar/sidebar.component';
import HeaderComponent from '../../shared/shared-components/header/header.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
// se exportó por default el dashboard
export default class DashboardComponent{

}