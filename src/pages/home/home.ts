import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public states: any[];
   public cities: any[];
   public kitchens: any[];

    public selectedKitchens: any[];
    public selectedCities: any[];

    public sState: any;
    public sCity: any;

    appName = 'Ionic App';

    constructor(public navController: NavController) { 
        this.initializeState();
        this.initializeCity();
        this.initializeKitchen();
    }

    initializeState(){
    this.states = [
        {id: 1, name: 'Alaska'},
        {id: 2, name: 'Alabama'}
    ];
    }

    initializeCity(){
    this.cities = [
        {id: 1, name: 'Palmer', state_id: 1, state_name: 'Alaska'},
        {id: 2, name: 'Birmingham', state_id: 2, state_name: 'Alabama'},
        {id: 3, name: 'Clanton', state_id: 2, state_name: 'Alabama'},
        {id: 4, name: 'Florence', state_id: 2, state_name: 'Alabama'}
    ];
    }

    initializeKitchen(){
    this.kitchens = [
        {id: 1, name: 'Mat-Su Community Commercial Kitchen', state_id: 1, city_id: 1},
        {id: 2, name: 'Chefs Workshop', state_id: 2, city_id: 2},
        {id: 3, name: 'Chilton Food Innovation Center', state_id: 1, city_id: 3},
        {id: 4, name: 'Shoals Commercial Culinary Center', state_id: 2, city_id: 4}
    ];
    }

    setCityValues(sState) {
        console.log(sState);
        this.selectedCities = this.cities.filter(city => city.state_id == sState.id);
        console.log(this.selectedCities);
    }

    setKitchensValues(sCity) {
        this.selectedKitchens = this.kitchens.filter(kitchen => kitchen.city_id == sCity.id);
    }

}
