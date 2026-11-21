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
    name: 'Puzzle for Two', category: 'JOGO',
    description: [
      '<strong>Puzzle for Two</strong> é um jogo cooperativo de enigmas para dois jogadores. Em salas separadas, cada participante encontra pistas diferentes e precisa compartilhar suas descobertas para avançar. Entre letras, cores, símbolos, cálculos e melodias, comunicação e raciocínio lógico são essenciais para resolver os desafios em conjunto.'
    ],
    galleryTitle: 'Imagens das fases',
    gallery: [
      { src: 'assets/puzzle-fase-01-letras-e-lanternas.webp', alt: 'Duas salas com um quadro de letras coloridas, lanternas e um painel de códigos.', caption: 'Fase 1 — Letras e Lanternas', width: 1774, height: 887 },
      { src: 'assets/puzzle-fase-03-oficina-dos-simbolos.webp', alt: 'Duas salas com blocos, símbolos e prateleiras de formas para um desafio em dupla.', caption: 'Fase 3 — Oficina dos Símbolos', width: 1774, height: 887 },
      { src: 'assets/puzzle-fase-04-sala-das-contas.webp', alt: 'Duas salas com lousas, dados e blocos de operações matemáticas.', caption: 'Fase 4 — Sala das Contas', width: 1774, height: 887 },
      { src: 'assets/puzzle-fase-05-quarto-da-melodia.webp', alt: 'Duas salas com notas musicais, caixas de som e um piano.', caption: 'Fase 5 — Quarto da Melodia', width: 1774, height: 887 },
      { src: 'assets/puzzle-fase-06-pontes-encantadas.webp', alt: 'Duas salas com pontes e peças coloridas marcadas com formas geométricas.', caption: 'Fase 6 — Pontes Encantadas', width: 1774, height: 887 }
    ]
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
    name: 'Trabalhos acadêmicos', category: 'FORMAÇÃO E PESQUISA',
    descriptionTitle: 'Sobre os trabalhos',
    description: ['Projetos de jogos e narrativa interativa.'],
    works: [
      {
        name: 'FeedTheFish',
        status: 'Em desenvolvimento',
        description: 'Jogo de plataforma 2D em desenvolvimento no GDevelop.'
      },
      {
        name: 'Uma Nova Voz',
        description: 'Visual novel desenvolvida no Ren’Py.'
      }
    ]
  },
  blender: {
    name: 'Assets no Blender', category: 'ARTE 3D',
    descriptionTitle: 'Sobre os assets',
    description: ['Modelos 3D criados no Blender.'],
    assets: ['Caixa de som', 'Estante', 'Lousa', 'Lanterna', 'Gramofone', 'Livro', 'Piano'],
    gallery: [
      { src: 'assets/blender-gramofone-01.png', alt: 'Modelo 3D de um gramofone exibido no Blender.', caption: 'Gramofone — modelagem no Blender', width: 1912, height: 1024 },
      { src: 'assets/blender-piano.png', alt: 'Modelo 3D de um piano em processo de modelagem no Blender.', caption: 'Piano — modelagem no Blender', width: 1920, height: 1080 },
      { src: 'assets/blender-gramofone-02.png', alt: 'Outra captura do modelo 3D do gramofone na interface do Blender.', caption: 'Gramofone — visão da cena', width: 1920, height: 1080 }
    ]
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
      ${project.image ? `<img class="dialog-project-image" src="${project.image}" alt="${project.imageAlt}" width="315" height="250">` : ''}
      <section class="project-description">
        <h3>${project.descriptionTitle || 'Sobre o jogo'}</h3>
        ${project.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
      </section>
      ${project.assets ? `<section><h3>Assets modelados</h3><ul class="asset-list">${project.assets.map(asset => `<li>${asset}</li>`).join('')}</ul></section>` : ''}
      ${project.works ? `<div class="academic-projects academic-projects--dialog">${project.works.map(work => `<section><h3>${work.name}</h3>${work.status ? `<span class="project-status">${work.status}</span>` : ''}<p>${work.description}</p></section>`).join('')}</div>` : ''}
      ${project.gallery ? `<section class="asset-gallery"><h3>${project.galleryTitle || 'Galeria'}</h3><p>Selecione uma imagem para ampliar.</p>${project.gallery.map(photo => `<figure><a href="${photo.src}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar imagem: ${photo.caption}"><img src="${photo.src}" alt="${photo.alt}" width="${photo.width}" height="${photo.height}" loading="lazy"></a><figcaption>${photo.caption}</figcaption></figure>`).join('')}</section>` : ''}
      ${project.url ? `<a class="button" href="${project.url}" target="_blank" rel="noopener noreferrer">Jogar no itch.io</a>` : ''}
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

