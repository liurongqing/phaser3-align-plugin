declare module 'phaser3-align-plugin' {
  class AlignPlugin{}
}

declare namespace Phaser {
  export interface Scene {
    align: {
      vw: Function
      vh: Function
      grid: Function
      placeAt: Function
      placeAtIndex: Function
      envelop: Function
    }
  }
}
