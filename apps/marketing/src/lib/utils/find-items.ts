import { slugify } from "./slugify";

export function findItem<T extends { name: string }>(id: string, items: T[]) {
  return items.find(({ name }) => slugify(name) === id);
}
