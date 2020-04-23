const { Engine, Render, Runner, World, Bodies } = Matter;

const width = 600;
const height = 600;
const borderSize = 40;
const cells = 3;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls

const walls = [
  //top
  Bodies.rectangle(width / 2, 0, width, borderSize, { isStatic: true }),
  //bottom
  Bodies.rectangle(width / 2, height, width, borderSize, { isStatic: true }),
  //left
  Bodies.rectangle(0, height / 2, borderSize, height, { isStatic: true }),
  //right
  Bodies.rectangle(width, height / 2, borderSize, height, { isStatic: true }),
];

World.add(world, walls);

// Maze generation

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

console.log(grid);
