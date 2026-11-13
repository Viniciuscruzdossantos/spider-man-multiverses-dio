# Live Spider-Man Multiversos

Site em HTML, CSS e JavaScript puro com um carrossel 3D na página inicial e uma página para cada filme do Homem-Aranha de Tobey Maguire, Tom Holland e Andrew Garfield. Projeto desenvolvido no curso da DIO.

## Como rodar

Abra o `index.html` no navegador ou use a extensão Live Server do VS Code (a porta está em `.vscode/settings.json`).

## O que tem no projeto

- **Página inicial:** carrossel 3D com três cards. Gire clicando em 01, 02 e 03, com as setas do teclado ou deslizando o dedo no celular.
- **Páginas dos filmes:** vídeo de trailer ao fundo, ano, diretor, sinopse, botão de trailer e galeria de imagens (abre em tela cheia com o Fancybox).
- **Menu lateral:** troca entre os filmes do mesmo ator e volta para a página inicial.

## Estrutura

```
index.html
assets/
  css/        estilos (global, reset, home, páginas internas e components/)
  scripts/    script.js (carrossel da página inicial)
  images/     imagens por ator e por filme
  videos/     trailers usados nas páginas internas
pages/
  tobey-maguire/    3 filmes
  tom-holland/      3 filmes
  andrew-garfield/  2 filmes
```

## Filmes

| Ator | Filme | Ano | Diretor |
|------|-------|-----|---------|
| Tobey Maguire | Homem-Aranha | 2002 | Sam Raimi |
| Tobey Maguire | Homem-Aranha 2 | 2004 | Sam Raimi |
| Tobey Maguire | Homem-Aranha 3 | 2007 | Sam Raimi |
| Andrew Garfield | O Espetacular Homem-Aranha | 2012 | Marc Webb |
| Andrew Garfield | O Espetacular Homem-Aranha 2 | 2014 | Marc Webb |
| Tom Holland | Homem-Aranha: De Volta ao Lar | 2017 | Jon Watts |
| Tom Holland | Homem-Aranha: Longe de Casa | 2019 | Jon Watts |
| Tom Holland | Homem-Aranha: Sem Volta Para Casa | 2021 | Jon Watts |

## Melhorias feitas nesta versão

- Ano, diretor e sinopse corrigidos em todas as páginas (várias tinham os dados do primeiro filme).
- Menu da página inicial com links funcionando e sem depender de `href="/"`.
- Vídeos de fundo com `muted` e `playsinline`, para o autoplay funcionar nos navegadores.
- Layout responsivo para celular, e a galeria não cobre mais a sinopse em telas baixas.
- Galerias com lightbox em todas as páginas, e as de Tobey 2 e 3 agora usam as imagens dos próprios filmes.
- Carrossel acessível pelo teclado e por toque, com foco visível.
- Textos alternativos nas imagens, `lang="pt-BR"`, ícone da aba e título próprio em cada página.
- Arquivo `index.js` duplicado removido (o site usa `script.js`).

## Para fazer depois

- Tom Holland 2 e 3 ainda usam a galeria do primeiro filme, porque não há imagens próprias na pasta `assets/images/spiderman-tom/`.
- Comprimir os vídeos em `assets/videos/` para o site carregar mais rápido.
