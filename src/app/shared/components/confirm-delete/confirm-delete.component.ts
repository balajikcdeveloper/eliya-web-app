import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  @Input()
  category: {
    name: string;
    icon: string;
    isActive: boolean;
  };
  constructor(
    private commonService:CommonService
  ) { }

  ngOnInit(): void {
  }

  deleteClicked(){
 var flag ;
 flag =1;
 this.commonService.deleteClicked(flag);
  }
}
