console.log('hello, world!');
const circle = require('./circle');  // ./ 점 하나는 현재 디렉토리, 두개는 상위폴더
console.log('Area of a circle = ' + circle.area(3));
console.log('Circumference of a circle = ' + circle.circum(3));
console.log('PI = ' + circle.PI);