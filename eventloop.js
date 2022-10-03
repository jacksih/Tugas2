const bar = () => console.log('Jacky')

const baz = () => console.log('Morgan')

const foo = () => {
  console.log('Sihombing')
  bar()
  baz()
}

foo()