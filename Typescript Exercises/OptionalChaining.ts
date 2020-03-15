
/**
 * this is foe optional chaining.
 * Optional chaining is used in typescript for prohibiting runtime error caused by
 * not available nested object.
 * If a object is missing, typescript will stop executing thar and won't search any nested object
 */
const employee ={
    name: 'Soumya',
    id: 'S1001',
    job:{
        title: 'Automation',
        role: 'Testing'
    }
}

console.log(employee?.job?.title);