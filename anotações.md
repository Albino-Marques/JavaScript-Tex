# TypeCasting:

## 5 + 2.0 --> 5 + 2

### Neste exemplo abaixo, o JavaScript converte o 2.0 para o mesmo tipo do 5 já que é possível. Para que seja possível efetuar a operação matemática.

<hr>

## Number('0x11') = 17:
### O 0x11 entra como hexadecimal onde o JavaScript irá convertê-lo, ficando 11(16). Este irão ser convertidos --> 1x16(0) + 1x16(1) --->>> 16 + 1 = 17

<hr>

### null == undefined -->> undefined (será convertido para undefined)

<br>
<br>

# Declaração de Variáveis:

### É possível declarar variávei usando:
### "let"
### "const"
### "var"

[x] São processadas antes de qualquer outras no código.
[x] Equivale a declarar no início.


# Variáveis não declaradas:

[x] Só existem a partir do momento que recebem um valor
[x] Tem sempre escopo global após sua atribuição
[x] São configuráveis (Podem ser excluídas com delete)

# Null

[x] Falta de identificação sobre a variável pertencer a um objeto.
[x] Sempre retorna falso.

# Undefined

[x] Falta de um valor atribuído a uma variável.
[x] Retorna falso também.

# NaN

[x] Not a Number.
[x] Impossibilidade de um cálculo.
[x] Exemplo: parseInt('Olá') // NaN.
[x] 'Mensagem'/3 == NaN.
[x] Retorna falso também.

# Tipos de declarações:
<hr>

## var:

[x] Seu bloco é contexto atuak em execução.
[x] Globalmente ou no escopo inteiro de uma função.
[x] Pode ser redeclarada.

## let:

[x] Limitada ao escopo de bloco, exoressão ou instrução em que é utilizada.
[x] Não pode ser redeclarada.

## const:

[x] Escopo de bloco semelhante a let.
[x] Não permite que seu conteúdo seja substituído em variáveis simples.
[x] Em arrays e objetos os indices e chaves pode ser alterados.
