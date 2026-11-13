# Spider-Man | Multiversos 🕷️

Site feito com **HTML, CSS e JavaScript puro** para explorar os filmes do Homem-Aranha de três atores diferentes. A página inicial tem um carrossel 3D, e cada filme tem a sua própria página com trailer de fundo, sinopse e galeria de imagens.

## 🕸️ Como navegar

Na página inicial, escolha um dos três Homens-Aranha e entre no multiverso dele:

| Card | Ator | Filmes |
|---|---|---|
| 01 | Tobey Maguire | 3 |
| 02 | Tom Holland | 3 |
| 03 | Andrew Garfield | 2 |

Dentro de cada ator, o menu lateral troca entre os filmes dele e volta para a página inicial.

## 🎬 Filmes

| Ator | Filme | Ano | Diretor |
|---|---|---|---|
| Tobey Maguire | Homem-Aranha | 2002 | Sam Raimi |
| Tobey Maguire | Homem-Aranha 2 | 2004 | Sam Raimi |
| Tobey Maguire | Homem-Aranha 3 | 2007 | Sam Raimi |
| Andrew Garfield | O Espetacular Homem-Aranha | 2012 | Marc Webb |
| Andrew Garfield | O Espetacular Homem-Aranha 2 | 2014 | Marc Webb |
| Tom Holland | Homem-Aranha: De Volta ao Lar | 2017 | Jon Watts |
| Tom Holland | Homem-Aranha: Longe de Casa | 2019 | Jon Watts |
| Tom Holland | Homem-Aranha: Sem Volta Para Casa | 2021 | Jon Watts |

## ✨ Recursos

- **Carrossel 3D:** três cards que giram em 3D na página inicial, com efeito de destaque ao passar o mouse ou focar com o teclado.
- **Páginas dos filmes:** trailer em vídeo ao fundo, ano, diretor, sinopse, botão de trailer e menu lateral.
- **Galeria com lightbox:** as imagens de cada filme abrem em tela cheia com o Fancybox.
- **Layout responsivo:** funciona em celular, e a galeria não cobre mais a sinopse em telas baixas.
- **Acessibilidade:** navegação pelo teclado com foco visível, textos alternativos nas imagens, `lang="pt-BR"` e título próprio em cada página.

## ⌨️ Comandos

| Controle | Ação |
|---|---|
| `←` `→` | Girar o carrossel |
| `Tab` | Focar nos cards (o carrossel gira até o card focado) |
| `Enter` ou `Espaço` | Selecionar um dos botões 01, 02 e 03 |
| Clique em 01, 02, 03 | Ir direto para um card |
| Deslizar o dedo | Girar o carrossel no celular |

## 🚀 Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.

Também funciona com a extensão **Live Server** do VS Code (a porta está em `.vscode/settings.json`). Não precisa instalar nada.

## 📁 Estrutura

```
index.html
assets/
├── css/       # reset, global, home, páginas internas e components/
├── scripts/   # script.js (carrossel da página inicial)
├── images/    # imagens por ator e por filme
└── videos/    # trailers usados nas páginas internas
pages/
├── tobey-maguire/      # 3 filmes
├── tom-holland/        # 3 filmes
└── andrew-garfield/    # 2 filmes
```

## 🧠 Conceitos abordados

- Carrossel 3D com `transform`, `rotateY`, `translateZ` e variáveis CSS
- Organização do CSS em arquivos e componentes (nomes no estilo BEM)
- Eventos de mouse, foco, teclado e toque no JavaScript
- Layout responsivo com media queries
- Acessibilidade (`aria-label`, `tabindex`, foco visível e textos alternativos)
- Biblioteca externa via CDN (Fancybox) para a galeria

## 🙏 Créditos

Este projeto é baseado no projeto **Spider-Man Multiversos**, do curso da **[Digital Innovation One (DIO)](https://www.dio.me/)**.

- Imagens, vídeos e estilos de interface vêm do material do projeto original.
- Esta versão corrige os dados dos filmes (ano, diretor e sinopse), melhora o menu, os vídeos de fundo, as galerias, a responsividade e a acessibilidade.

Homem-Aranha e seus personagens são marcas registradas de seus respectivos proprietários. Projeto sem fins lucrativos, feito para fins educacionais.

## 👨‍💻 Autor desta versão

Feito por **Vinícius Cruz dos Santos**

[![GitHub](https://img.shields.io/badge/GitHub-Viniciuscruzdossantos-181717?logo=github)](https://github.com/Viniciuscruzdossantos)
