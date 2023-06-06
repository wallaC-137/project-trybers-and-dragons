import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdRacesInstances = 0;

  constructor(name : string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdRacesInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Warrior._createdRacesInstances;
  }
}