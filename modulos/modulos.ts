//import { areaRetangulo } from './retangulo'
//import { areaCircunferencia } from './circunferencia'
import retangulo from './retangulo'
import { areaCircunferencia as circ } from './circunferencia'

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))

console.log(retangulo(7, 8))
console.log(circ(2))