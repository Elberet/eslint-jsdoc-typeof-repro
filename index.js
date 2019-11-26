import { createEntityClass } from "./module"

const _entityClass = Symbol("entityClass")

export default class Factory {

  constructor() {
    this[_entityClass] = createEntityClass()
  }

  /** @typedef {import("./module").EntityBase} EntityBase */

  /** @type {new() => EntityBase} */
  get Entity() { return this[_entityClass] }

}
