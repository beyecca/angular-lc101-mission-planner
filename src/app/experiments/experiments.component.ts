import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: string = null;
  experiment: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if (this.experiment.indexOf(name) <= 0){
      this.experiment.push(name);
    }
  }

  remove(name: string) {
    let index = this.experiment.indexOf(name);
    this.experiment.splice(index, 1);
  }

  edit(member: string) {
    this.experimentBeingEdited = member;
  }

  save(name: string, member: string) {
    this.experiment.splice(this.experiment.indexOf(member), 1, name);
    this.experimentBeingEdited = null;
  }
}
