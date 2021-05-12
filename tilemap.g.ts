// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010202020201010202010102020202010102020202010102020101020202020101010101010101010101010101010202010201010202020202020202030102020102010102020101010101010101020201010101010101010201010202020202010202020202010102010202020202010101010101010101010101010101010101020201020101010101010101020201010202010201020202020201010202010101010101010101010101010102020202010202020102020202020201020202020102020201010101010101010101020201020202010202020202020102020202010101010101010101010101010102020102020201020202020202010101`, img`
. . 2 2 2 2 . . 2 2 . . 2 2 2 2 
. . 2 2 2 2 . . 2 2 . . 2 2 2 2 
. . . . . . . . . . . . . . . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 . . 2 
2 . 2 . . 2 2 . . . . . . . . 2 
2 . . . . . . . . 2 . . 2 2 2 2 
2 . 2 2 2 2 2 . . 2 . 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . 2 2 . 2 . . . . . . . . 2 2 
. . 2 2 . 2 . 2 2 2 2 2 . . 2 2 
. . . . . . . . . . . . . . 2 2 
2 2 . 2 2 2 . 2 2 2 2 2 2 . 2 2 
2 2 . 2 2 2 . . . . . . . . . . 
2 2 . 2 2 2 . 2 2 2 2 2 2 . . . 
2 2 . . . . . . . . . . . . . . 
2 2 . 2 2 2 . 2 2 2 2 2 2 . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tile1":return tile1;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
