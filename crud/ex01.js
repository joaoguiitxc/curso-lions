const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let proximoId = 1;
let alunos = [];

function mostrarMenu() {
    console.log("\n=======================");
    console.log("SISTEMA ESCOLAR");
    console.log("=======================");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Lista aluno");
    console.log("3 - Buscar por ID");
    console.log("4 - Atualizar Aluno");
    console.log("5 - Remover Aluno");
    console.log("6 - Mostrar Alunos aprovados");
    console.log("7 - Mostrar aluno reprovado");
    console.log("0 - Sair");
    console.log("======================");

    rl.question("Escolha uma opção", (opcao) => {
        if (opcao === "1") {
            cadstrarAluno()
        } else if (opcao === "2") {
            listarAluno();
        } else if (opcao === "3") {
            buscarAlunoporId();
        }

    })
}
function listarAluno() {
    console.log("Listar Alunos")

    if (alunos.length === 0) {
        console.log("Nenhum aluno cadstrado")
        mostrarMenu();
        return;
    }

    for (let i = 0; i < alunos.length; i++) {
        console.log("\nID: " + alunos[i].id)
        console.log("Nome: " + alunos[i].nome)
        console.log("Idade: " + alunos[i].idade)
        console.log("Turma: " + alunos[i].turma)
        console.log("Nota: " + alunos[i].nota)

    }

    mostrarMenu();

}

function cadstrarAluno() {
    console.log("cadastrar Aluno");

    rl.question("Digite o nome do aluno: ", (nome) => {
        rl.question("digite a idade do aluno: ", (idade) => {
            rl.question("Digite a turma do aluno: ", (turma) => {
                rl.question("digite a nota do aluno: ", (nota) => {
                    idade = Number(idade);
                    nota = Number(nota);

                    if (nome === "" || idade === "" || turma === "" || nota === "") {
                        console.log("ERRO: Não prencheu todas as infos")
                        mostrarMenu();
                        return;
                    }

                    if (idade <= 0 || nota < 0 || nota > 10) {
                        console.log("ERRo: idade ou nota inválida");
                        mostrarMenu();
                        return;
                    }

                    let aluno = {
                        id: proximoId,
                        nome: nome,
                        idade: idade,
                        turma: turma,
                        nota: nota
                    };

                    alunos.push(aluno);
                    proximoId++;

                    console.log("aluno cadastrado com sucesso")
                    mostrarMenu();
                })
            })
        })
    })
}

function buscarAlunoporId() {
    console.log("Buscar aluno por ID")

    rl.question("Digite o ID do aluno: ", (id) => {
        id = Number(id);

        let aluno = encontrarAlunoPorId(id);

        if (aluno === null) {
            console.log("Aluno não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nAluno Encontrado");
        console.log("\nID: " + aluno.id);
        console.log("Nome: " + aluno.nome)
        console.log("Idade: " + aluno.idade)
        console.log("Turma: " + aluno.turma)
        console.log("Nota: " + aluno.nota)

    })
}

function encontrarAlunoPorId(id) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].id === id) {
            return alunos[i];
        }
    }


    return null;
}



mostrarMenu();