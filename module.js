export class EntityBase {}

/**
 * Creates entity class.
 *
 * @returns {typeof EntityBase} created class
 */
export function createEntityClass() {
  return class extends EntityBase {}
}
