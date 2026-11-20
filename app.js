// Projetos com descrição exibem conteúdo final; os demais mantêm os campos a preencher.
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const projects = {
  agarre: {
    name: 'Agarre-se', category: 'JOGO',
    image: 'assets/agarre-se.png',
    imageAlt: 'Joaquim, personagem de Agarre-se, sentado em uma poltrona e vestindo uma blusa roxa.',
    description: [
      '<strong>Agarre-se</strong> é um jogo de labirinto sobre memória, tempo e as pequenas coisas que dão significado a uma vida.',
      'Você acompanha Joaquim, um homem idoso que vive com Alzheimer, enquanto ele percorre labirintos formados a partir de suas próprias lembranças.',
      'Em cada fase, explore cenários inspirados em momentos importantes de seu passado e encontre fragmentos de memória antes que o tempo se esgote.',
      'Quanto mais memórias Joaquim recupera, maior se torna seu campo de visão, revelando pouco a pouco o caminho à sua frente.'
    ],
    url: 'https://giokobi.itch.io/agarre-se'
  },
  puzzle: {
    name: 'Puzzle for Two', category: 'JOGO', media: 'Capturas das fases ou vídeo de gameplay',
    sections: [
      ['Sobre o jogo', 'Proposta, gênero e objetivo dos jogadores'],
      ['Minha participação', 'O que desenvolvi e quais foram minhas responsabilidades'],
      ['Mecânicas e ferramentas', 'Cooperação, puzzles e recursos utilizados'],
      ['Processo e aprendizados', 'Desafios, testes e melhorias realizadas']
    ], links: ['Link para jogar', 'Página ou vídeo do projeto']
  },
  engenharia: {
    name: 'Projetos de engenharia', category: 'ENGENHARIA', media: 'Desenhos técnicos, modelos CAD ou resultados de simulações',
    sections: [
      ['Apresentação dos projetos', 'Nome, contexto e objetivo de cada trabalho'],
      ['Problema e solução', 'Necessidade estudada e solução desenvolvida'],
      ['Minha participação e ferramentas', 'Responsabilidades, softwares e métodos utilizados'],
      ['Resultados e aprendizados', 'O que foi obtido e quais conhecimentos foram aplicados']
    ], links: ['Documentação do projeto', 'Galeria de trabalhos']
  },
  academicos: {
    name: 'Trabalhos acadêmicos', category: 'FORMAÇÃO E PESQUISA', media: 'Imagens, apresentações ou documentos dos trabalhos',
    sections: [
      ['Sobre os trabalhos', 'Tema, disciplina, instituição e período'],
      ['Objetivos e desenvolvimento', 'Proposta, metodologia e etapas realizadas'],
      ['Minha participação', 'Responsabilidades individuais e colaboração com a equipe'],
      ['Resultados e aprendizados', 'Entregas, conclusões e conhecimentos desenvolvidos']
    ], links: ['Documento do trabalho', 'Apresentação ou galeria']
  },
  blender: {
    name: 'Assets no Blender', category: 'ARTE 3D', media: 'Renders, detalhes da malha ou vídeo dos modelos',
    sections: [
      ['Sobre os assets', 'Nome, proposta e finalidade dos modelos'],
      ['Processo de criação', 'Referências, modelagem e texturização'],
      ['Ferramentas e características', 'Técnicas utilizadas e detalhes relevantes dos assets'],
      ['Aplicação e aprendizados', 'Como os modelos são utilizados e o que aprendi']
    ], links: ['Galeria dos assets', 'Vídeo de apresentação']
  }
};
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    content.innerHTML = project.description ? `
      <span class="eyebrow">${project.category}</span>
      <h2 id="dialog-title">${project.name}</h2>
      <img class="dialog-project-image" src="${project.image}" alt="${project.imageAlt}" width="315" height="250">
      <section class="project-description">
        <h3>Sobre o jogo</h3>
        ${project.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
      </section>
      <a class="button" href="${project.url}" target="_blank" rel="noopener noreferrer">Jogar no itch.io</a>
    ` : `
      <span class="eyebrow">${project.category} / CONTEÚDO A PREENCHER</span>
      <h2 id="dialog-title">${project.name}</h2>
      <div class="dialog-media">${project.media}<br>Espaço reservado</div>
      ${project.sections.map(([title, hint]) => `<section><h3>${title}</h3><span class="content-hint">${hint}</span><p>${lorem}</p></section>`).join('')}
      <h3>Links do trabalho</h3>
      <span class="content-hint">Espaços reservados para os links finais</span>
      <div class="dialog-links">${project.links.map(label => `<span>${label}</span>`).join('')}</div>`;
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
