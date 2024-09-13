async function listarAlunos() {
    try {
        // Faz a leitura do arquivo JSON local
        const response = await fetch('escola.json');
        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON: ' +

                response.status);

        }
        // Converte a resposta para JSON
        const dados = await response.json();
        // Seleciona o elemento onde os alunos serão exibidos
        const listaAlunos = document.getElementById('listaAlunos');

        listaAlunos.innerHTML = ''; // Limpa a lista antes de exibir
        
        // Itera pelos alunos e cria os elementos de lista
        dados.alunos.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `ID: ${aluno.id}, Nome: ${aluno.nome},
    
    Idade: ${aluno.idade}, Nota Final: ${aluno.notaFinal}`;

            listaAlunos.appendChild(li);
        });
    } catch (erro) {
        // Trata erros ao carregar o arquivo ou processar os dados
        console.error('Erro durante a busca dos alunos:',

            erro.message);
    } finally {
        // Mensagem que será sempre exibida
        console.log('Operação de busca de alunos finalizada.');
    }
}