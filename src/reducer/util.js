import {Map} from 'immutable';

export function arrToMap(arr, Model) {
  return arr.reduce((arr, el) => arr.set(el.id, new Model(el)), new Map({}));
}
export function mapToArr(map) {
  Object.keys(map).map(id => map[id]);
}