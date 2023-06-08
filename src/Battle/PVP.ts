import Fighter from '../Fighter/Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerOne: Fighter;
  private _enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._playerOne = player;
    this._enemy = enemy;
  }

  get playerOne(): Fighter {
    return this._playerOne;
  }

  get enemy(): Fighter {
    return this._enemy;
  }

  override fight(): number {
    while (this._playerOne.lifePoints > 0 && this._enemy.lifePoints > 0) {
      this._playerOne.attack(this._enemy);
      this._enemy.attack(this._playerOne);
    }
    return super.fight();
  }  
}