import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PRODUCTS } from '../configs/products'
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public accessoriesFormGroup: FormGroup;
  public fabricFormGroup: FormGroup;
  public smallPartsFormGroup: FormGroup;
  public unitFormGroup: FormGroup;

  public products = PRODUCTS;

  private destroy$ = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      product: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      designerPrincipal_rate: [''],
      designerPrincipal_hours: [''],
      designerPrincipal_total: [{ value: '', disabled: true }],

      designerSenior_rate: [''],
      designerSenior_hours: [''],
      designerSenior_total: [{ value: '', disabled: true }],

      designer_rate: [''],
      designer_hours: [''],
      designer_total: [{ value: '', disabled: true }],

      designerJunior_rate: [''],
      designerJunior_hours: [''],
      designerJunior_total: [{ value: '', disabled: true }],

      designerStage_rate: [''],
      designerStage_hours: [''],
      designerStage_total: [{ value: '', disabled: true }],
    });

    this.accessoriesFormGroup = this.formBuilder.group({
      baseCostForPrototype: [''],
      accessories: [''],
      others: ['']
    });

    this.fabricFormGroup = this.formBuilder.group({

      wool_unit: [''],
      wool_price: [''],

      cashmire_unit: [''],
      cashmire_price: [''],

      cotton_unit: [''],
      cotton_price: [''],

      viscose_unit: [''],
      viscose_price: [''],

      ecoLeather_unit: [''],
      ecoLeather_price: [''],

      leather_unit: [''],
      leather_price: [''],

      exoticLeather_unit: [''],
      exoticLeather_price: ['']

    });

    this.smallPartsFormGroup = this.formBuilder.group({
      buttons_unit: [''],
      buttons_price: [''],

      buckles_unit: [''],
      buckles_price: [''],

      zip_unit: [''],
      zip_price: [''],

      stones_unit: [''],
      stones_price: ['']
    });

    this.unitFormGroup = this.formBuilder.group({
      units: ['']
    });

    this.setTotalValue();
  }

  private setTotalValue() {
    this.secondFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      if (value['designerPrincipal_rate'] && value['designerPrincipal_hours']) {
        const total = +value['designerPrincipal_rate'] * +value['designerPrincipal_hours']
        this.secondFormGroup.controls['designerPrincipal_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerSenior_rate'] && value['designerSenior_hours']) {
        const total = +value['designerSenior_rate'] * +value['designerSenior_hours']
        this.secondFormGroup.controls['designerSenior_total'].setValue(total, { emitEvent: false });
      }

      if (value['designer_rate'] && value['designer_hours']) {
        const total = +value['designer_rate'] * +value['designer_hours']
        this.secondFormGroup.controls['designer_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerJunior_rate'] && value['designerJunior_hours']) {
        const total = +value['designerJunior_rate'] * +value['designerJunior_hours']
        this.secondFormGroup.controls['designerJunior_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerStage_rate'] && value['designerStage_hours']) {
        const total = +value['designerStage_rate'] * +value['designerStage_hours']
        this.secondFormGroup.controls['designerStage_total'].setValue(total, { emitEvent: false });
      }

    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
