'use strict'
const sentences = [
    { subject: 'Python', verb: 'is', object: 'great' },
    { subject: 'Dogs', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}