import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import {LoginService} from '../../auth/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
  	Hari;


  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}


  	constructor(private elementRef: ElementRef,
                private router: Router,
                private service: LoginService) { }


  	ngOnInit() {
  	}

  	logout(){
  	  this.service.logout();
      this.router.navigateByUrl("/");
    }

}
