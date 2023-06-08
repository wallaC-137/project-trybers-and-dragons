import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _playerOne: Fighter;
  private _enemy: Monster[] | Fighter[] | SimpleFighter[];

  constructor(player: Fighter, enemy: Monster[] | Fighter[] | SimpleFighter[]) {
    super(player);
    this._playerOne = player;
    this._enemy = enemy;
  }

  get playerOne(): Fighter {
    return this._playerOne;
  }

  get enemy(): Monster[] | Fighter[] | SimpleFighter[] {
    return this._enemy;
  }

  override fight(): number {
    this._enemy.forEach((enemy) => {
      while (this._playerOne.lifePoints > 0 && enemy.lifePoints > 0) {
        this._playerOne.attack(enemy);
        enemy.attack(this._playerOne);
      }
    });
    return super.fight();
  }
}