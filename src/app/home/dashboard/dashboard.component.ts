import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PRODUCTS } from '../configs/products'
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public products = PRODUCTS;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      product: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      designerPrincipal_rate: [''],
      designerPrincipal_hours: [''],
      designerPrincipal_total: [''],

      designerSenior_rate: [''],
      designerSenior_hours: [''],
      designerSenior_total: [''],

      designer_rate: [''],
      designer_hours: [''],
      designer_total: [''],

      designerJunior_rate: [''],
      designerJunior_hours: [''],
      designerJunior_total: [''],

      designerStage_rate: [''],
      designerStage_hours: [''],
      designerStage_total: [''],

    });
  }
}
