// === TASK #1 ===

// const infoStud = {
//   name: 'oleg',
//   specialist: 'zvarshyk',
//   grade: '7',
//   missed: '12 lekcij',
//   showinfo() {
//     console.log(
//       `Uchen ${this.name} je strashnym specialistom jak ${this.specialist}, maje ocinku ${this.grade}, ale propustyv ${this.missed}`,
//     );
//   },
// };

// student2 = {
//   name: 'mykola veresen',
//   specialist: 'vodij',
//   grade: '8',
//   missed: '8 lekcij',
// };

// student3 = {
//   name: 'grycko',
//   specialist: 'kranovshik',
//   grade: '11',
//   missed: '10 lekcij',
// };

// infoStud.showinfo.apply(student3);
// infoStud.showinfo.call(student2);
// infoStud.showinfo.bind(infoStud)();

// === TASK #2 ===

// const vyznachennia = {
//   natysnenaKnopka() {
//     console.log('Bulo vybrano :', this.vybir);
//   },
// };

// const css = {
//   vybir: ['css - ce ...'],
// };

// const html = {
//   vybir: ['html - ce ...'],
// };

// document
//   .querySelector('#cs')
//   .addEventListener('click', vyznachennia.natysnenaKnopka.bind(css));

// document
//   .querySelector('#ht')
//   .addEventListener('click', vyznachennia.natysnenaKnopka.bind(html));

// === TASK #3 ===

// const infoFruit = {
//   name: 'strawberry',
//   price: '100',
//   vaga: '10',
//   showinfo() {
//     console.log(
//       `danyj frukt : ${this.name} koshtuje ${this.price} za kilogram `,
//     );
//   },
// };

// const banana = {
//   name: 'banana',
//   price: '30',
//   vaga: '4.5',
// };

// const cherry = {
//   name: 'cherry',
//   price: '58',
//   vaga: '1.3',
// };

// const orange = {
//   name: 'orange',
//   price: '89',
//   vaga: '3.4',
// };

// infoFruit.showinfo.call(banana);
// infoFruit.showinfo.apply(cherry);
// infoFruit.showinfo.bind(orange)();
// infoFruit.showinfo.call(infoFruit);
