interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;     // Discrimination union

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`${animal.type} is moving at the speed of ${speed}`);
}
const animal1:Animal = {
    type: 'bird',
    flyingSpeed: 25,
}
moveAnimal(animal1);
