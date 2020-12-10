const height = 600;
const width = 800;
const nrOfShapes = 25;

const { Runner, World, Engine, Render, Bodies, Mouse, MouseConstraint } = Matter;
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.querySelector("#container"),
    engine: engine,
    options: {
        wireframes: false,
        height: height,
        width: width
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);
World.add(world, MouseConstraint.create(engine, { mouse: Mouse.create(render.canvas) }));


const walls = [
    Bodies.rectangle((width / 2), 0, width, 40, { isStatic: true }),
    Bodies.rectangle((width / 2), height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, (height / 2), 40, height, { isStatic: true }),
    Bodies.rectangle(width, (height / 2), 40, height, { isStatic: true }),
];

World.add(world, walls);

for (let i = 0; i < nrOfShapes; i++) {
    if (Math.random() < 0.5) {
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
    }
    else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35));
    }
}