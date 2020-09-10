declare module 'phaser3-align-plugin' {
  class AlignPlugin { }
}



declare namespace Phaser {
  export interface Scene {
    align: {
      envelop(obj: any, scale: number): void
      vw(obj: any, scale: number): void
      vh(obj:any, scale: number): void
      grid(obj: {rows?: number, cols?: number, color?: any, debug?: boolean}): void
      placeAt(row: number, col: number, obj: any, origin?: number[]): void
      placeAtIndex(index: number, obj: any, origin?: number[]): void
      
    }
  }
}
