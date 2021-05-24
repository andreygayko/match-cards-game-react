const cards = [
  {id: 'A', related: 'a'}, 
  {id: 'a', related: 'A'},
  {id: 'b', related: 'B'}, 
  {id: 'B', related: 'b'},
  {id: 'c', related: 'C'}, 
  {id: 'C', related: 'c'},
  {id: 'D', related: 'd'}, 
  {id: 'd', related: 'D'},
  {id: 'E', related: 'e'},
  {id: 'e', related: 'E'},
  {id: 'F', related: 'f'},
  {id: 'f', related: 'F'},
];

export const getCards = (qty: number) => {
  const arr = [...cards.slice(0, qty)];   
  for (let i = qty - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};