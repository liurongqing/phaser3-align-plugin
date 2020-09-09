# install

```bash
yarn add phaser3-align-plugin
```

# use

```typescript
// 1.
import { AlignPlugin } from 'phaser3-align-plugin'
const config = {
    plugins: {
        scene: [
            {
                key: 'AlignPlugin',
                plugin: AlignPlugin,
                mapping: 'align'
            }
        ]
    },
}

// 2. 
this.align.envelop(sprite, 1)
this.align.vw(sprite, 1)
this.align.vh(sprite, 1)
this.align.grid({rows: 7, cols: 7, debug: true})
this.align.placeAt(row, col, sprite)
this.align.placeAtIndex(index, sprite)
```
