const {Aluno} = require('./aluno.js');

const estudantes = [
    new Aluno('Bruno', 3, [5, 10, 7]),
    new Aluno('Júlio', 2, [6, 7, 8]),
    new Aluno("Gustavo",1, [2, 5, 8]),
    new Aluno("Lays", 0, [3, 2, 3]),
    new Aluno("Pedro", 10, [4, 9, 0]),
    new Aluno("Raul", 4, [0, 5, 10]),
    new Aluno("Flávia", 5, [10, 9, 7]),
    new Aluno("Beatriz", 1, [2, 8, 4]),
    new Aluno("Alanis", 7, [8, 6, 7]),
    new Aluno("Paulo", 2, [9, 10,2]),
]

module.exports.estudantes = estudantes;