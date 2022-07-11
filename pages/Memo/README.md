# Memo
(Ref)[https://pt-br.reactjs.org/docs/react-api.html#reactmemo] 

O React.memo é um higher order component.

### *higher order component
Concretamente, um componente de ordem superior é uma função que recebe um componente e retorna um novo componente.

`
const EnhancedComponent = higherOrderComponent(WrappedComponent);
`

Se <b>seu componente renderiza o mesmo resultado dados os mesmos props</b>, você pode envolver nele uma chamada para React.memo para um aumento no desempenho em alguns casos, através da memoização do resultado. Isto significa que o <b>React vai pular a renderização do componente e reutilizar o último resultado renderizado.</b>

React.memo verifica apenas as alterações de prop. Se o seu componente de função envolvido em React.memo tiver um <b>useState, useReducer ou useContext Hook</b> em sua implementação, <b>ele ainda será renderizado</b> quando o estado ou o contexto mudar.