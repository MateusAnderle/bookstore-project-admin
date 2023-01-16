import livro1 from '../assets/livros/livro1.webp'
import livro2 from '../assets/livros/livro2.webp'
import livro3 from '../assets/livros/livro3.webp'
import livro4 from '../assets/livros/livro4.webp'
import livro5 from '../assets/livros/livro5.webp'
import livro6 from '../assets/livros/livro6.webp'
import livro7 from '../assets/livros/livro7.webp'

export const BookData = [
  {
    id: 1,
    livro: 'O Homem Mais Rico Da Babilônia',
    autor: 'George S Clason',
    ano: '2017',
    genero: 'Auto-ajuda',
    image: livro1,
    quantidade: 1,
    precoSugerido: 34.9,
    preco: 17.9,
    sinopse:
      'Com mais de dois milhões de exemplares vendidos no mundo todo, O homem mais rico da Babilônia é um clássico sobre como multiplicar riqueza e solucionar problemas financeiros. Baseando-se nos segredos de sucesso dos antigos babilônicos — os habitantes da cidade mais rica e próspera de seu tempo —, George S. Clason mostra soluções ao mesmo tempo sábias e muito atuais para evitar a falta de dinheiro, como não desperdiçar recursos durante tempos de opulência, buscar conhecimento e informação em vez de apenas lucro, assegurar uma renda para o futuro, manter a pontualidade no pagamento de dívidas e, sobretudo, cultivar as próprias aptidões, tornando-se cada vez mais habilidoso e consciente.',
    fichaTecnica: [
      { id: 1, chave: 'Livro', valor: 'O Homem Mais Rico Da Babilônia' },
      { id: 2, chave: 'Autor', valor: 'George S Clason' },
      { id: 3, chave: 'Data de publicação', valor: '04/08/2017' },
      { id: 4, chave: 'Idioma', valor: 'Português' },
      { id: 5, chave: 'Código de Barras', valor: '9788595081536' },
      { id: 6, chave: 'Fabricante', valor: 'HarperCollins' },
      {
        id: 7,
        chave: 'Dimensões do produto',
        valor: 'A 20,8 cm / L 13,5 cm / P 1,3 cm / 235 gr',
      },
    ],
  },
  {
    id: 2,
    livro: 'O Poder Da Autorresponsabilidade',
    autor: 'Paulo Vieira',
    ano: '2015',
    genero: 'Auto-ajuda',
    image: livro2,
    quantidade: 1,
    precoSugerido: 24.9,
    preco: 9.9,
    sinopse:
      'Muitas pessoas têm consciência de que precisam assumir as rédeas da própria vida, porém não sabem como fazer isso na prática.Este livro traz ao leitor o conceito de autorresponsabilidade. Trata-se de um manual que apresenta a metodologia das 6 leis para a conquista da autorresponsabilidade, de modo que o leitor assuma o comando de sua vida.',
    fichaTecnica: [
      { id: 1, chave: 'Livro', valor: 'O Poder Da Autorresponsabilidade' },
      { id: 2, chave: 'Autor', valor: 'Paulo Vieira' },
      { id: 3, chave: 'Data de publicação', valor: '04/08/2019' },
      { id: 4, chave: 'Idioma', valor: 'Português' },
      { id: 5, chave: 'Código de Barras', valor: '9788545202219' },
      { id: 6, chave: 'Fabricante', valor: 'Gente' },
      {
        id: 7,
        chave: 'Dimensões do produto',
        valor: 'A 14 cm / L 10 cm / P 1 cm / 90 gr',
      },
    ],
  },
  {
    id: 3,
    livro: 'Mais Esperto Que O Diabo',
    autor: 'Napoleon Hill',
    ano: '2019',
    genero: 'Auto-ajuda',
    image: livro3,
    quantidade: 1,
    precoSugerido: 22.9,
    preco: 17.9,
    sinopse:
      'O maior sucesso da Citadel Editora é o primeiro título da coleção Diamante de Bolso, que reúne obras de nosso catálogo em versão concisa e editada, para você carregar consigo como uma autêntica pedra preciosa, tendo ao alcance de sua mão uma fonte de inspiração e iluminação. Neste livro, inédito no Brasil, você vai descobrir, após 80 anos de segredo, por meio desta entrevista exclusiva que Hill fez, quebrando o código secreto da mente do Diabo: Quem é o Diabo? Onde ele habita? Quais suas principais armas e artimanhas mentais? Quem são os alienados e de que forma se alienam? Qual a visão do Diabo sobre a energia sexual? Como buscar uma vida cheia de realizações, valorizando a felicidade e a liberdade? Escondido desde 1938, este livro não somente é uma fonte de inspiração e coragem, mas também deve ser considerado um manual para todas aquelas pessoas que desejam ser mais espertas que seus medos, problemas e limitações. Sabendo mais sobre o Diabo e suas armadilhas mentais, acabamos nos aproximando mais do Criador.',
    fichaTecnica: [
      { id: 1, chave: 'Livro', valor: 'Mais Esperto Que O Diabo' },
      { id: 2, chave: 'Autor', valor: 'Napoleon Hill' },
      { id: 3, chave: 'Data de publicação', valor: '04/08/2019' },
      { id: 4, chave: 'Idioma', valor: 'Português' },
      { id: 5, chave: 'Código de Barras', valor: '9788568014936' },
      { id: 6, chave: 'Fabricante', valor: 'Citadel' },
      {
        id: 7,
        chave: 'Dimensões do produto',
        valor: 'A 14 cm / L 10 cm / P 1 cm / 81 gr',
      },
    ],
  },
  {
    id: 4,
    livro: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ano: '2018',
    genero: 'Ficção clássica',
    image: livro4,
    quantidade: 1,
    precoSugerido: 12.9,
    preco: 11.9,
    sinopse:
      'Nesta edição de bolso da clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edição conta com a clássica tradução do poeta imortal dom Marcos Barbosa, e é a versão mais consagrada da obra, publicada no Brasil desde 1952. Acompanha uma carta muito especial do sobrinho de Antoine de Saint-Exupéry, a assinatura do autor na capa e um selo holográfico oficial do Pequeno Príncipe.',
    fichaTecnica: [
      { id: 1, chave: 'Livro', valor: 'O Pequeno Príncipe' },
      { id: 2, chave: 'Autor', valor: 'Antoine de Saint-Exupéry' },
      { id: 3, chave: 'Data de publicação', valor: '04/08/2018' },
      { id: 4, chave: 'Idioma', valor: 'Português' },
      { id: 5, chave: 'Código de Barras', valor: '9788568884936' },
      { id: 6, chave: 'Fabricante', valor: 'HarperCollins' },
      {
        id: 7,
        chave: 'Dimensões do produto',
        valor: 'A 17,6 cm / L 11,4 cm / P 0,8 cm / 90 gr',
      },
    ],
  },
  {
    id: 5,
    livro: 'As Aventuras De Sherlock Holmes',
    autor: 'Arthur Conan Doyle',
    ano: '2019',
    genero: 'Ficção clássica',
    image: livro5,
    quantidade: 1,
    precoSugerido: 24.9,
    preco: 15.9,
    sinopse:
      'Sherlock Holmes é um detetive britânico enigmático e pedante do final do século XIX e início do século XX. Ele utiliza a metodologia científica e a lógica dedutiva para solucionar seus casos e conta com a ajuda de seu fiel amigo e parceiro dr. Watson. Observação, perspicácia e um pouco de intuição são alguns dos instrumentos usados por Sherlock Holmes para desvendar os seis curiosos casos reunidos nesta obra e narrados pelo atento doutor Watson.',
    fichaTecnica: [
      { id: 1, chave: 'Livro', valor: 'As Aventuras De Sherlock Holmes' },
      { id: 2, chave: 'Autor', valor: 'Arthur Conan Doyle' },
      { id: 3, chave: 'Data de publicação', valor: '04/08/2019' },
      { id: 4, chave: 'Idioma', valor: 'Português' },
      { id: 5, chave: 'Código de Barras', valor: '97844568884936' },
      { id: 6, chave: 'Fabricante', valor: 'Principis' },
      {
        id: 7,
        chave: 'Dimensões do produto',
        valor: 'A 17,6 cm / L 11,4 cm / P 0,8 cm / 90 gr',
      },
    ],
  },
  {
    id: 6,
    livro: 'Drácula ',
    autor: 'Bram Stoker',
    ano: '2019',
    genero: 'Terror',
    image: livro6,
    quantidade: 1,
    precoSugerido: 54.9,
    preco: 35.9,
    sinopse:
      'O amor e mais forte que a mote drácula e um romance de ficção gótica tendo como protagonista o conde drácula. Tornou-se a mais famosa historia de vampiros da literatura. O aclamado autor de literatura de terror Stephen king considerou drácula um dos três grandes clássicos do gênero. Estruturalmente, e um romance epistolar, ou seja, contado como uma serie de cartas, relatos em diário, jornais e registros de bordos. Drácula mistura ficção de terror, gótica e literatura de vampiros. Embora Stokes não tenha sido influenciado por contos anteriores, o seu romance foi responsável pela popularização dos vampiros através de muitas pecas de teatro, cinema e televisão. Drácula ganhou inúmeras interpretações ao longo dos séculos xx e xxi.',
    fichaTecnica: [
      { id: 1, chave: 'Livro', valor: 'Drácula' },
      { id: 2, chave: 'Autor', valor: 'Bram Stoker' },
      { id: 3, chave: 'Data de publicação', valor: '04/12/2019' },
      { id: 4, chave: 'Idioma', valor: 'Português' },
      { id: 5, chave: 'Código de Barras', valor: '9784938884936' },
      { id: 6, chave: 'Fabricante', valor: 'Pé da Letra' },
      {
        id: 7,
        chave: 'Dimensões do produto',
        valor: 'A 17,6 cm / L 11,4 cm / P 0,8 cm / 90 gr',
      },
    ],
  },
  {
    id: 7,
    livro: 'Misery: Louca Obsessão ',
    autor: 'Stephen King',
    ano: '2014',
    genero: 'Suspense, terror',
    image: livro7,
    quantidade: 1,
    precoSugerido: 59.9,
    preco: 34.9,
    sinopse:
      'Paul Sheldon é um escritor famoso, reconhecido por uma série de best-sellers protagonizados pela mesma personagem: Misery Chastain. Annie Wilkes é uma enfermeira aposentada, leitora voraz e obcecada pela história de Misery. Quando Paul sofre um acidente de carro em uma nevasca, ele é resgatado justamente por Annie, e esse encontro entre fã e autor é o ponto de partida de uma das tramas mais aterrorizantes de Stephen King. Insatisfeita com o final do último livro da série, a fã isola o autor debilitado em um quarto em sua casa. Com torturas, ameaças e uma vigilância persistente, ela faz de tudo para obrigá-lo a reescrever a narrativa com o final que ela considera apropriado. Considerada uma das vilãs mais assustadoras e complexas do universo King e interpretada por Kathy Bates no filme que se tornou um clássico, Annie Wilkes é a figura que faz de Misery um livro essencial.',
    fichaTecnica: [
      { id: 1, chave: 'Livro', valor: 'Misery: Louca Obsessão' },
      { id: 2, chave: 'Autor', valor: 'Stephen King' },
      { id: 3, chave: 'Data de publicação', valor: '04/12/2014' },
      { id: 4, chave: 'Idioma', valor: 'Português' },
      { id: 5, chave: 'Código de Barras', valor: '9711938884936' },
      { id: 6, chave: 'Fabricante', valor: 'Suma' },
      {
        id: 7,
        chave: 'Dimensões do produto',
        valor: 'A 23 cm / L 16 cm / P 2 cm / 511 gr',
      },
    ],
  },
]
