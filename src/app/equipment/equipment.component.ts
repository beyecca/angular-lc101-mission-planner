import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: string = null;
  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if (this.equipment.indexOf(name) <= 0){
      this.equipment.push(name);
    }
  }

  remove(name: string) {
    let index = this.equipment.indexOf(name);
    this.equipment.splice(index, 1);
  }

  edit(member: string) {
    this.equipmentBeingEdited = member;
  }

  save(name: string, member: string) {
    this.equipment.splice(this.equipment.indexOf(member), 1, name);
    this.equipmentBeingEdited = null;
  }
}
