import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAIN_APP_ROUTES } from 'app/routes';
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
    minuteria_a_pezzo: 0,
    maniffattura: 0,
    totale_tessauto: 0,
    totale_minuteria: 0
  }

  private destroy$ = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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

      total_designer: [{ value: '', disabled: true }],
    });

    this.accessoriesFormGroup = this.formBuilder.group({
      baseCostForPrototype: [''],
      accessories: [''],
      others: [''],

      total_prototype: [{ value: '', disabled: true }],
    });

    this.fabricFormGroup = this.formBuilder.group({

      wool_unit: [''],
      wool_price: [''],
      wool_total: [{ value: '', disabled: true }],

      cashmire_unit: [''],
      cashmire_price: [''],
      cashmire_total: [{ value: '', disabled: true }],

      cotton_unit: [''],
      cotton_price: [''],
      cotton_total: [{ value: '', disabled: true }],

      viscose_unit: [''],
      viscose_price: [''],
      viscose_total: [{ value: '', disabled: true }],

      ecoLeather_unit: [''],
      ecoLeather_price: [''],
      ecoLeather_total: [{ value: '', disabled: true }],

      leather_unit: [''],
      leather_price: [''],
      leather_total: [{ value: '', disabled: true }],

      exoticLeather_unit: [''],
      exoticLeather_price: [''],
      exoticLeather_total: [{ value: '', disabled: true }],

      total_fabric: [{ value: '', disabled: true }]

    });

    this.smallPartsFormGroup = this.formBuilder.group({
      buttons_unit: [''],
      buttons_price: [''],
      buttons_total: [{ value: '', disabled: true }],

      buckles_unit: [''],
      buckles_price: [''],
      buckles_total: [{ value: '', disabled: true }],

      zip_unit: [''],
      zip_price: [''],
      zip_total: [{ value: '', disabled: true }],

      stones_unit: [''],
      stones_price: [''],
      stones_total: [{ value: '', disabled: true }],

      total_parts: [{ value: '', disabled: true }]
    });

    this.unitFormGroup = this.formBuilder.group({
      units: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.setDesignersTotalValue();
    this.setTotalPrototype();
    this.setFabricsTotalValue();
    this.setSmallPartsTotalValue();
  }

  public calculateTotal(): void {
    this.calculateCostTotale();
    this.calculateCostoRicerca();
    this.calculateProtopia();
    this.total.tessuto_a_pezzo = this.fabricFormGroup.controls['total_fabric'].value;
    this.total.minuteria_a_pezzo = this.smallPartsFormGroup.controls['total_parts'].value;
    this.calculateTotaleTesutto();
    this.calculateTotaleMinuteria();
  }

  public redirect(): void {
    this.router.navigate([MAIN_APP_ROUTES.THANK_YOU])
  }

  private calculateTotaleTesutto(): void {
    let total = 0;

    if (this.fabricFormGroup.controls['wool_unit'].value) {
      total = total + this.fabricFormGroup.controls['wool_unit'].value;
    }

    if (this.fabricFormGroup.controls['cashmire_unit'].value) {
      total = total + this.fabricFormGroup.controls['cashmire_unit'].value;
    }

    if (this.fabricFormGroup.controls['cotton_unit'].value) {
      total = total + this.fabricFormGroup.controls['cotton_unit'].value;
    }

    if (this.fabricFormGroup.controls['ecoLeather_unit'].value) {
      total = total + this.fabricFormGroup.controls['ecoLeather_unit'].value;
    }

    if (this.fabricFormGroup.controls['leather_unit'].value) {
      total = total + this.fabricFormGroup.controls['leather_unit'].value;
    }

    if (this.fabricFormGroup.controls['exoticLeather_unit'].value) {
      total = total + this.fabricFormGroup.controls['exoticLeather_unit'].value;
    }

    this.total.totale_tessauto = total;

  }

  private calculateTotaleMinuteria(): void {
    let total = 0;

    if (this.smallPartsFormGroup.controls['buttons_unit'].value) {
      total = total + this.smallPartsFormGroup.controls['buttons_unit'].value;
    }

    if (this.smallPartsFormGroup.controls['buckles_unit'].value) {
      total = total + this.smallPartsFormGroup.controls['buckles_unit'].value;
    }

    if (this.smallPartsFormGroup.controls['zip_unit'].value) {
      total = total + this.smallPartsFormGroup.controls['zip_unit'].value;
    }

    if (this.smallPartsFormGroup.controls['stones_unit'].value) {
      total = total + this.smallPartsFormGroup.controls['stones_unit'].value;
    }

    this.total.totale_minuteria = total;

  }

  private calculateCostTotale(): void {
    let price = 0;
    if (this.secondFormGroup.controls['total_designer'].value) {
      price = price + this.secondFormGroup.controls['total_designer'].value;
    }

    if (this.accessoriesFormGroup.controls['total_prototype'].value) {
      price = price + this.accessoriesFormGroup.controls['total_prototype'].value;
    }

    if (this.fabricFormGroup.controls['total_fabric'].value) {
      price = price + this.fabricFormGroup.controls['total_fabric'].value;
    }

    if (this.smallPartsFormGroup.controls['total_parts'].value) {
      price = price + this.smallPartsFormGroup.controls['total_parts'].value;
    }

    const units = this.unitFormGroup.controls['units'].value;
    this.total.totale = this.getDiscount(units, price);
    this.total.per_pezzo = price / units;
    this.total.maniffattura = units * this.unitFormGroup.controls['price'].value;
  }

  private calculateProtopia(): void {
    if (this.accessoriesFormGroup.controls['baseCostForPrototype'].value) {
      this.total.prototipia = this.total.prototipia + this.accessoriesFormGroup.controls['baseCostForPrototype'].value;
    }

    if (this.accessoriesFormGroup.controls['accessories'].value) {
      this.total.prototipia = this.total.prototipia + this.accessoriesFormGroup.controls['accessories'].value;
    }

    if (this.accessoriesFormGroup.controls['others'].value) {
      this.total.prototipia = this.total.prototipia + this.accessoriesFormGroup.controls['others'].value;
    }
  }

  private calculateCostoRicerca(): void {
    if (this.secondFormGroup.controls['designerPrincipal_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerPrincipal_total'].value;
    }

    if (this.secondFormGroup.controls['designerSenior_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerSenior_total'].value;
    }

    if (this.secondFormGroup.controls['designer_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designer_total'].value;
    }

    if (this.secondFormGroup.controls['designerJunior_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerJunior_total'].value;
    }

    if (this.secondFormGroup.controls['designerStage_total'].value) {
      this.total.ricerca = this.total.ricerca + this.secondFormGroup.controls['designerStage_total'].value;
    }
  }

  private setDesignersTotalValue(): void {
    this.secondFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      let totalDesigner = 0;
      if (value['designerPrincipal_rate'] && value['designerPrincipal_hours']) {
        const total = value['designerPrincipal_rate'] * value['designerPrincipal_hours'];
        totalDesigner = totalDesigner + total;
        this.secondFormGroup.controls['total_designer'].setValue(totalDesigner, { emitEvent: false });
        this.secondFormGroup.controls['designerPrincipal_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerSenior_rate'] && value['designerSenior_hours']) {
        const total = value['designerSenior_rate'] * value['designerSenior_hours'];
        totalDesigner = totalDesigner + total;
        this.secondFormGroup.controls['total_designer'].setValue(totalDesigner, { emitEvent: false });
        this.secondFormGroup.controls['designerSenior_total'].setValue(total, { emitEvent: false });
      }

      if (value['designer_rate'] && value['designer_hours']) {
        const total = value['designer_rate'] * value['designer_hours'];
        totalDesigner = totalDesigner + total;
        this.secondFormGroup.controls['total_designer'].setValue(totalDesigner, { emitEvent: false });
        this.secondFormGroup.controls['designer_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerJunior_rate'] && value['designerJunior_hours']) {
        const total = value['designerJunior_rate'] * value['designerJunior_hours'];
        totalDesigner = totalDesigner + total;
        this.secondFormGroup.controls['total_designer'].setValue(totalDesigner, { emitEvent: false });
        this.secondFormGroup.controls['designerJunior_total'].setValue(total, { emitEvent: false });
      }

      if (value['designerStage_rate'] && value['designerStage_hours']) {
        const total = value['designerStage_rate'] * value['designerStage_hours'];
        totalDesigner = totalDesigner + total;
        this.secondFormGroup.controls['total_designer'].setValue(totalDesigner, { emitEvent: false });
        this.secondFormGroup.controls['designerStage_total'].setValue(total, { emitEvent: false });
      }

    });
  }

  private setTotalPrototype(): void {
    this.accessoriesFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      let total = 0;
      if (value['baseCostForPrototype']) {
        total = total + value['baseCostForPrototype'];
        this.accessoriesFormGroup.controls['total_prototype'].setValue(total, { emitEvent: false });
      }

      if (value['accessories']) {
        total = total + value['accessories'];
        this.accessoriesFormGroup.controls['total_prototype'].setValue(total, { emitEvent: false });
      }

      if (value['others']) {
        total = total + value['others'];
        this.accessoriesFormGroup.controls['total_prototype'].setValue(total, { emitEvent: false });
      }

    });
  }

  private setFabricsTotalValue(): void {
    this.fabricFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      let totalFabric = 0;
      if (value['wool_unit'] && value['wool_price']) {
        const total = this.getDiscount(value['wool_unit'], value['wool_price']);
        totalFabric = totalFabric + total;
        this.fabricFormGroup.controls['total_fabric'].setValue(totalFabric, { emitEvent: false });
        this.fabricFormGroup.controls['wool_total'].setValue(total, { emitEvent: false });
      }

      if (value['cashmire_unit'] && value['cashmire_price']) {
        const total = this.getDiscount(value['cashmire_unit'], value['cashmire_price']);
        totalFabric = totalFabric + total;
        this.fabricFormGroup.controls['total_fabric'].setValue(totalFabric, { emitEvent: false });
        this.fabricFormGroup.controls['cashmire_total'].setValue(total, { emitEvent: false });
      }

      if (value['cotton_unit'] && value['cotton_price']) {
        const total = this.getDiscount(value['cotton_unit'], value['cotton_price']);
        totalFabric = totalFabric + total;
        this.fabricFormGroup.controls['total_fabric'].setValue(totalFabric, { emitEvent: false });
        this.fabricFormGroup.controls['cotton_total'].setValue(total, { emitEvent: false });
      }

      if (value['viscose_unit'] && value['viscose_price']) {
        const total = this.getDiscount(value['viscose_unit'], value['viscose_price']);
        totalFabric = totalFabric + total;
        this.fabricFormGroup.controls['total_fabric'].setValue(totalFabric, { emitEvent: false });
        this.fabricFormGroup.controls['viscose_total'].setValue(total, { emitEvent: false });
      }

      if (value['ecoLeather_unit'] && value['ecoLeather_price']) {
        const total = this.getDiscount(value['ecoLeather_unit'], value['ecoLeather_price']);
        totalFabric = totalFabric + total;
        this.fabricFormGroup.controls['total_fabric'].setValue(totalFabric, { emitEvent: false });
        this.fabricFormGroup.controls['ecoLeather_total'].setValue(total, { emitEvent: false });
      }

      if (value['leather_unit'] && value['leather_price']) {
        const total = this.getDiscount(value['leather_unit'], value['leather_price']);
        totalFabric = totalFabric + total;
        this.fabricFormGroup.controls['total_fabric'].setValue(totalFabric, { emitEvent: false });
        this.fabricFormGroup.controls['leather_total'].setValue(total, { emitEvent: false });
      }

      if (value['exoticLeather_unit'] && value['exoticLeather_price']) {
        const total = this.getDiscount(value['exoticLeather_unit'], value['exoticLeather_price']);
        totalFabric = totalFabric + total;
        this.fabricFormGroup.controls['total_fabric'].setValue(totalFabric, { emitEvent: false });
        this.fabricFormGroup.controls['exoticLeather_total'].setValue(total, { emitEvent: false });
      }

    });

  }

  private setSmallPartsTotalValue(): void {
    this.smallPartsFormGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      let totalParts = 0;
      if (value['buttons_unit'] && value['buttons_price']) {
        const total = this.getDiscount(value['buttons_unit'], value['buttons_price']);
        totalParts = totalParts + total;
        this.smallPartsFormGroup.controls['total_parts'].setValue(totalParts, { emitEvent: false });
        this.smallPartsFormGroup.controls['buttons_total'].setValue(total, { emitEvent: false });
      }

      if (value['buckles_unit'] && value['buckles_price']) {
        const total = this.getDiscount(value['buckles_unit'], value['buckles_price']);
        totalParts = totalParts + total;
        this.smallPartsFormGroup.controls['total_parts'].setValue(totalParts, { emitEvent: false });
        this.smallPartsFormGroup.controls['buckles_total'].setValue(total, { emitEvent: false });
      }

      if (value['zip_unit'] && value['zip_price']) {
        const total = this.getDiscount(value['zip_unit'], value['zip_price']);
        totalParts = totalParts + total;
        this.smallPartsFormGroup.controls['total_parts'].setValue(totalParts, { emitEvent: false });
        this.smallPartsFormGroup.controls['zip_total'].setValue(total, { emitEvent: false });
      }

      if (value['stones_unit'] && value['stones_price']) {
        const total = this.getDiscount(value['stones_unit'], value['stones_price']);
        totalParts = totalParts + total;
        this.smallPartsFormGroup.controls['total_parts'].setValue(totalParts, { emitEvent: false });
        this.smallPartsFormGroup.controls['stones_total'].setValue(total, { emitEvent: false });
      }
    });
  }

  private getDiscount(unit, price): number {
    if (unit <= 150) {
      return unit * price;
    } else if (unit <= 300) {
      return unit * price * 0.7;
    } else if (unit <= 600) {
      return unit * price * 0.45;
    } else if (unit <= 1200) {
      return unit * price * 0.35;
    } else if (unit > 1200) {
      return unit * price * 0.30
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
