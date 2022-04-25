//METODO

// function alumn (fullName, yearOfbirth, Professions) {
//     this.fullName = fullName;
//     this.yearOfbirth = yearOfbirth;
//     this.Professions = Professions;
// }    

// const alumn1 = new alumn("Carlito Alimaña", 2004, 'Development');
// const alumn2 = new alumn("Carito Nand", 2002, 'Graphic Design');
// const alumn3 = new alumn("Laura Rin", 2000, 'Architect');

// console.log(alumn1)




//METODO CON FUNCION INTEGRADA 'METODO PERSONALIZADOS'

// function alumn (fullName, yearOfbirth, Professions) {
//     this.fullName = fullName;
//     this.yearOfbirth = yearOfbirth;
//     this.Professions = Professions;
//     this.talkBot = function (){console.log("Hola soy" + " " + this.fullName)}
// }    

// const alumn1 = new alumn("Carlito Alimaña", 2004, 'Development');
// const alumn2 = new alumn("Carito Nand", 2002, 'Graphic Design');
// const alumn3 = new alumn("Laura Rin", 2000, 'Architect');

// alumn2.talkBot();

//METODO CON 'FOR' 'IN'

// function alumn (fullName, yearOfbirth, Professions) {
//     this.fullName = fullName;
//     this.yearOfbirth = yearOfbirth;
//     this.Professions = Professions;
// }    

// const alumn1 = new alumn("Carlito Alimaña", 2004, 'Development');
// const alumn2 = new alumn("Carito Nand", 2002, 'Graphic Design');
// const alumn3 = new alumn("Laura Rin", 2000, 'Architect');

// for(const fullName in alumn1) {
//     console.log(alumn1[fullName]);
// }

// OBJECT CLASS-CONSTRUCTOR

// class alumn{
//     constructor(fullName, yearOfbirth, Professions) {
//         this.fullName = fullName;
//         this.yearOfbirth = yearOfbirth;
//         this.Professions = Professions;
//     }
// };

// const alumn1 = new alumn("Carlito Alimaña", 2004, 'Development');
// const alumn2 = new alumn("Carito Nand", 2002, 'Graphic Design');
// const alumn3 = new alumn("Laura Rin", 2000, 'Architect');

// console.log(alumn1);
// console.log(alumn2);
// console.log(alumn3);


// OBJECT CLASS-CONSTRUCTOR CON METODO


// class alumn{
//     constructor(fullName, yearOfbirth, Professions) {
//         this.fullName = fullName;
//         this.yearOfbirth = yearOfbirth;
//         this.Professions = Professions;
//     }
//     talkBot(){
//         console.log("Hola soy" + " " + this.fullName);
//     }
//     myYearOfBirth(){
//         console.log("Tengo" + " " + this.yearOfbirth)
//     }
//     myProfessions(){
//         console.log("Soy un" + " " + this.Professions)
//     }
// };

// const alumn1 = new alumn("Carlito Alimaña", 2004, 'Development');
// const alumn2 = new alumn("Carito Nand", 2002, 'Graphic Design');
// const alumn3 = new alumn("Laura Rin", 2000, 'Architect');

// console.log(alumn1);
// console.log(alumn2);
// console.log(alumn3);

// alumn1.talkBot();
// alumn2.myYearOfBirth();
// alumn2.myProfessions();