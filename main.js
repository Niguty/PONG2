const player = new Player({
    x: 0,
    y: 0,
    size: 50,
    speed: 8,
});
const npc = new Npc({
    x: 100,
    y: 100,
    size: 50,
    stepX: 2,
    stepY: 2,
});
const game = new Game();

game.addObject(player);
game.addObject(npc);
game.addObject(npc);

player.draw();
npc.draw();
npc.draw();

requestAnimationFrame(() => game.update());
