---
title: 'Teste Title MD'
slug: 'f'
date: '2023-04-1'
tag: 'reactjs'
img: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2018/09/28135119/capa-docker.jpg'
summary:
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt id quis
  perspiciatis quae aspernatur obcaecati! Nemo alias, similique tempore
  laudantium eveniet cumque maxime id adipisci unde placeat? Voluptatem, fugiat.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt id quis
  perspiciatis quae aspernatur obcaecati! Nemo alias, similique tempore
  laudantium eveniet cumque maxime id adipisci unde placeat? Voluptatem, fugiat.'
author:
  {
    name: 'Lucas Laurentino',
    job: 'Software Engineer',
    img: 'https://github.com/laurentino14.png',
  }

coAuthors:
  [
    {name: 'Leonardo Jean', job: 'Junior Software Engineer'},
    {name: 'Leonardo Jean', job: 'Junior Software Engineer'},
    {name: 'Leonardo Jean', job: 'Junior Software Engineer'},
  ]
---

# Conteúdo da Aula

O **DOM** é um modelo de documento carregado pelo navegador. Este documento é
representado através de uma **árvore de nós**, onde cada um destes nós
representa uma parte do documento (por ex. **um elemento, texto ou
comentário**).

O **DOM** é uma das APIs mais usadas na Web porque ele permite que **cada código
rodando no navegador acesse e interaja com cada nó do documento**. **Os nós
podem ser criados, movidos ou modificados.** Listeners de evento podem também
ser adicionados aos nós para serem disparados quando um dado evento ocorrer.

<aside>
💡 Resumindo: com o ******DOM******, podemos acessar, criar, alterar, excluir, executar e fazer o que quisermos com um nó da página (elemento)

</aside>

<aside>
🚨 Vale ressaltar que na ********DOM,******** TODO o seu código HTML irá aparecer!

</aside>

Para ilustrar a arquitetura da **\*\***DOM**\*\***, vamos analisar um print de
um DevTools (F12 no Chrome, Edge ou Firefox):

![Retirado do site www.google.com](Conteu%CC%81do%20da%20Aula%20da717929e8314fafb52c081707c2b65a/Untitled.png)

Retirado do site www.google.com

Essa é a imagem mais clara do que é a dom. É basicamente a árvore de elementos
que compõem uma página.

<aside>
🚨 Vale ressaltar que você pode ir mais a fundo na DOM, abrindo elemento por elemento, acessando elementos dentro de outros elementos, até chegar no último elemento presente na página, inclusive aqueles que não estão visíveis, mas estão declarados no HTML.

Veja na imagem a seguir:

</aside>

![Untitled](Conteu%CC%81do%20da%20Aula%20da717929e8314fafb52c081707c2b65a/Untitled%201.png)

<aside>
💡 Perceba que ao passar o mouse por cima de algum dos elementos da DOM, o mesmo fica com uma layer AZUL para melhor identificação

</aside>

Mas e os elementos invisíveis da página, mas que ainda sim estão presentes? Sim,
é possível definir objetos no meio do documento que não estarão visíveis na
tela.

Perceba no exemplo abaixo, que mesmo estando invisível, ele está presente na
DOM:

![Untitled](Conteu%CC%81do%20da%20Aula%20da717929e8314fafb52c081707c2b65a/Untitled%202.png)

<aside>
💡 Veja que no **DevTools**, o mouse está sobre um nó (está em azul bem fraco), mas o elemento não está visível na tela.

</aside>

Isso se dá por conta de sua **div PAI, que está com display none:**

![Untitled](Conteu%CC%81do%20da%20Aula%20da717929e8314fafb52c081707c2b65a/Untitled%203.png)

<aside>
💡 Logo se a div pai está com display none, todos os seus filhos também ficam invisível.

Se uma caixa fica invisível, o que está dentro dela some também.

Se um elemento dentro da caixa fica invisível, não necessariamente a caixa toda
ficará invisível.

</aside>

## Acessando a DOM

A DOM está disponível no Javascript através das palavras reservadas **window** e
**document.**

Na **window,** vamos encontrar alguns métodos de eventos, já no document, o
próprio nome já diz, vamos encontrar todos os métodos referentes à elementos
presente no documento.

Veja os exemplos abaixo:

```jsx
window.onload = alert('Bem vindo a minha página!')
```

<aside>
🚨 O código exibe um alerta na tela escrito: Bem vindo a minha página!

</aside>

```jsx
document
  .getElementById('idDoBotaoAcionadorDaFuncao')
  .addEventListener('click', () => {
    document.getElementById(
      'idDoElemento',
    ).innerHTML = `<p> **Inserindo** um P no elemento selecionado através do **javascript** </p>`
  })
```

<aside>
🚨 No caso acima, imagine que o elemento seja uma div, e você quer mudar o conteúdo dele quando o usuário clica em um botão, criando um parágrafo dentro.
Veja os passos:

Selecionar o botão

Chamar o método/funcao que cria um evento

No primeiro parametro, esse método recebe o nome do evento, e no segundo, recebe
uma funcao que será executada no evento selecionado

Dentro da funcao, selecionamos o elemento, chamamos o método innerHTML para
literalmente trocar TODO o conteúdo de dentro dessa div.

</aside>

Usando os operadores aritméticos vistos nas aulas anteriores, ao invés de trocar
tudo com o innerHTML, podemos adicionar trocando o sinal de = por +=.

Com esse conceito de podermos não só trocar como podemos adicionar elementos
dentro de outro, utilizando um terceiro como acionador, podemos pensar em
projetos como **TO-DO LIST (lista do que fazer, lista de tarefas).**

<aside>
🚨 Os métodos da DOM demonstrados acima, são bem comuns, e sim, existem uma infinidade de métodos que podem ser acionados para realizar algo no elemento selecionado.

</aside>

<aside>
💡 Fique tranquilo, com o tempo você vai aprender os mais úteis com os projetos aqui do curso.

</aside>

### Bônus:

Para realizar o projeto da aula, você terá que aprender a pegar dados de um
input para levar ele para outro lugar.

Veja no exemplo abaixo como isso é possível:

```jsx
document.getElementById('email').value
```

Como demonstração de um caso de uso:

```jsx
var emailValue = document.getElementById('email').value

// use onde quiser agora.
```
