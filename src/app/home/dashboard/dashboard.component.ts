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
  public total = {
    totale: 0,
    per_pezzo: 0,
    ricerca: 0,
    prototipia: 0,
    tessuto_a_pezzo: 0,
    maniffattura: 0,
    totale_tessauto: 0,
    totale_minuteria: 0
  }

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

  public calculateTotal(): void {
    this.calculateCostoRicerca();
    this.calculateProtopia();
  }

  private calculateProtopia(): void {
    if(this.accessoriesFormGroup.controls['baseCostForPrototype'].value) {
      this.total.prototipia = this.total.prototipia + this.accessoriesFormGroup.controls['baseCostForPrototype'].value;
    }

    if(this.accessoriesFormGroup.controls['accessories'].value) {
      this.total.prototipia = this.total.prototipia + this.accessoriesFormGroup.controls['accessories'].value;
    }

    if(this.accessoriesFormGroup.controls['others'].value) {
      this.total.prototipia = this.total.prototipia + this.accessoriesFormGroup.controls['others'].value;
    }
  }

  private calculateCostoRicerca(): void {
    if(this.secondFormGroup.controls['designerPrincipal_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerPrincipal_total'].value;
    }

    if(this.secondFormGroup.controls['designerSenior_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerSenior_total'].value;
    }

    if(this.secondFormGroup.controls['designer_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designer_total'].value;
    }

    if(this.secondFormGroup.controls['designerJunior_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerJunior_total'].value;
    }

    if(this.secondFormGroup.controls['designerStage_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerStage_total'].value;
    }
  }

  private setTotalValue(): void {
    this.secondFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      if (value['designerPrincipal_rate'] && value['designerPrincipal_hours']) {
        const total = value['designerPrincipal_rate'] * value['designerPrincipal_hours']
        this.secondFormGroup.controls['designerPrincipal_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerSenior_rate'] && value['designerSenior_hours']) {
        const total = value['designerSenior_rate'] * value['designerSenior_hours']
        this.secondFormGroup.controls['designerSenior_total'].setValue(total, { emitEvent: false });
      }

      if (value['designer_rate'] && value['designer_hours']) {
        const total = value['designer_rate'] * value['designer_hours']
        this.secondFormGroup.controls['designer_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerJunior_rate'] && value['designerJunior_hours']) {
        const total = value['designerJunior_rate'] * value['designerJunior_hours']
        this.secondFormGroup.controls['designerJunior_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerStage_rate'] && value['designerStage_hours']) {
        const total = value['designerStage_rate'] * value['designerStage_hours']
        this.secondFormGroup.controls['designerStage_total'].setValue(total, { emitEvent: false });
      }

    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
