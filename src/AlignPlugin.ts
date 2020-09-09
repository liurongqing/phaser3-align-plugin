export class AlignPlugin extends Phaser.Plugins.ScenePlugin {
  private rows: number
  private cols: number
  private color: any
  private cellWidth: number
  private cellHeight: number
  private graphics: any
  private depth = 9999

  constructor(scene, pluginManager) {
    super(scene, pluginManager)
  }

  // 完全适配
  envelop(obj: any, scale: number) {
    this[window.envelop](obj, scale)
  }

  // 缩放宽度，高度自适应
  vw(obj: any, scale: number) {
    const { width } = this.scene.scale
    obj.displayWidth = width * scale
    obj.scaleY = obj.scaleX
  }

  // 缩放高度， 宽度自适应
  vh(obj: any, scale: number) {
    const { height } = this.scene.scale
    obj.displayHeight = height * scale
    obj.scaleX = obj.scaleY
  }

  // 按行列放置
  placeAt(row: number, col: number, obj: Phaser.GameObjects.Image | Phaser.GameObjects.Sprite | Phaser.GameObjects.Text, origin = [0.5, 0.5]) {
    const x = this.cellWidth * col + this.cellWidth * origin[0]
    const y = this.cellHeight * row + this.cellHeight * origin[1]
    obj.setPosition(x, y)
  }

  // 按索引放置
  placeAtIndex(index: number, obj: Phaser.GameObjects.Image | Phaser.GameObjects.Sprite | Phaser.GameObjects.Text, origin = [0.5, 0.5]) {
    const row = Math.floor(index / this.cols)
    const col = index - (row * this.cols)
    this.placeAt(row, col, obj, origin)
  }

  // 开启网格布局
  grid({ rows = 5, cols = 5, color = 0xff0000, debug = true }) {
    const { width, height } = this.scene.scale
    this.rows = rows
    this.cols = cols
    this.color = Phaser.Display.Color.ValueToColor(color)
    this.cellWidth = width / cols
    this.cellHeight = height / rows
    if (debug) this.debug()
  }

  // 开启 debug 线
  private debug() {
    this.drawLine()
    let count = 0
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let numText = this.scene.add.text(0, 0, String(count), { color: this.color.rgba })
        numText.setOrigin(0.5).setDepth(this.depth)
        this.placeAtIndex(count, numText)
        count++
      }
    }
  }

  // 画线
  drawLine() {
    const { width, height } = this.scene.scale
    this.graphics = this.scene.add.graphics()
    this.graphics.lineStyle(2, this.color.color)

    for (let i = 0; i < width; i += this.cellWidth) {
      this.graphics.moveTo(i, 0)
      this.graphics.lineTo(i, height)
    }

    for (let i = 0; i < height; i += this.cellHeight) {
      this.graphics.moveTo(0, i)
      this.graphics.lineTo(width, i)
    }

    this.graphics.strokePath()
    this.graphics.setDepth(this.depth)
  }
}
