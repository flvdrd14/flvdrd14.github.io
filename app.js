// Os títulos identificam o que preencher. Substitua os textos Lorem ipsum depois.
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const projects = {
  agarre: {
    name: 'Agarre-se', category: 'JOGO', media: 'Capturas de tela ou vídeo de gameplay',
    sections: [
      ['Sobre o jogo', 'Proposta, gênero e objetivo do jogador'],
      ['Minha participação', 'O que desenvolvi e quais foram minhas responsabilidades'],
      ['Mecânicas e ferramentas', 'Como o jogo funciona e quais recursos utilizei'],
      ['Processo e aprendizados', 'Desafios, testes e melhorias realizadas']
    ], links: ['Link para jogar', 'Repositório do projeto']
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
    content.innerHTML = `
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
