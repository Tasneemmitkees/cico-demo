import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import generaldata, { Iidentificationnumbers } from 'src/app/data/generalinfo';

@Component({
  selector: 'app-my-component',
  styleUrls: ['./my-component.component.css'],
  templateUrl: './my-component.component.html'
})

export class MyComponentComponent implements OnInit {
  displayedColumns: string[] = ['country', 'numberType', 'numberID'];
  // selection = new SelectionModel<Iidentificationnumbers>(false,[]);
  // Selected?:Iidentificationnumbers;
  // form:FormGroup;
  // data=generaldata;
  // item:Iidentificationnumbers;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.createForm();
    // this.data.identificationnumbers.forEach((item:Iidentificationnumbers)=>{
    //   let resource = this.createtablerow();
    //   resource.patchValue({
    //      country: item.country,
    //      numberType: item.numberType,
    //      numberID: item.numberID
    //      });
    //   this.tableRowArray.push(resource);
    // })
  }
//   selectRow(row){
//     this.selection.toggle(row);
//   }
//   onSelect(item:Iidentificationnumbers):void
//   {
//     this.Selected=item;
//   }
//   createtablerow(): FormGroup {
//     return  this.fb.group({
//       country: new FormControl(''),
//       numberType: new FormControl(''),
//       numberID: new FormControl(''),
//     });
//   }
//   createForm(): void {
//     this.form = this.fb.group({
//         //tableRowArray is a FormArray which holds a list of FormGroups
//         tableRowArray: this.fb.array([])
//     })
//   }
// get tableRowArray(): FormArray {
//   return this.form.get('tableRowArray') as FormArray;
// }


}
