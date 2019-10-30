import { mapArray } from "./map";
let min = 0;
let maxCol = 15;
let maxRow = 8;
const randomCol = () => Math.floor(Math.random() * (maxCol - min + 1)) + min;
const randomRow = () => Math.floor(Math.random() * (maxRow - min + 1)) + min;
class Player {
  constructor(img, damage, health = 100, weapon = {}) {
    this.img = img;
    this.damage = damage;
    this.health = health;
    this.hasWeapon = false;
    this.weapon = weapon;
    this.position = {
      x: 0,
      y: 0
    };
    this.indexPosition = {
      row: 0,
      col: 0
    };
    this.init = () => {
      // Get random row and col indexes for they player position
      let rowPosition = randomRow();
      let colPosition = randomCol();
      // Check if the cell is blocked or not
      if (!mapArray[rowPosition][colPosition]) {
        // Check if it is first row
        if (rowPosition > 0) {
          // if the row is greater than one increment y pointer 40*noOfRows
          for (let i = 0; i < rowPosition; i++) {
            this.position.y += 80;
          }
        }
        // Check if it is first col
        if (colPosition > 0) {
          // if the col is greater than one increment x pointer 40*noOfCols
          for (let j = 0; j < colPosition; j++) {
            this.position.x += 80;
          }
        }
        // Updating player index position
        this.indexPosition.row = rowPosition;
        this.indexPosition.col = colPosition;
      } else {
        // If 'if' condition fails this function will be called again. Recursive function
        return this.init();
      }
    };
    this.init();
  }
  updatePlayerProperties(damage) {
    if (this.hasWeapon) {
      this.damage = damage + 100;
    } else {
      this.damage += damage;
    }
    console.log(this.damage);
  }
  updatePlayerWeapon(weapon) {
    this.weapon = weapon;
  }
  updateWeaponState() {
    this.hasWeapon = true;
  }
  updateHealth(health) {
    this.health -= health;
  }
}

export default Player;
