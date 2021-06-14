# Entrega - Katas de JavaScript 5

## Visão Geral

Para começar, acesse [este link](https://gitlab.com/kenzie-academy-brasil/se/fe/getting-started-with-javascript/s_js-katas-5), faça o fork e clone o repo.

Lembra de quando falamos sobre testes unitários? Revise a aula de testes unitários se precisar refrescar a memória.

Para os katas de hoje, você irá implementar várias funções. Você deve escrever ao menos dois testes unitários para cada função demonstrando seu comportamento. Todo o output pode ser dado via console.assert(); você não precisa de qualquer formatação HTML para esses katas. Estas funções devem passar nos testes unitários que forem escritos.

## Katas

1. Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.

Por exemplo, um teste para o 1° Kata poderia se parecer com isso:

```js
function testeReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
```
