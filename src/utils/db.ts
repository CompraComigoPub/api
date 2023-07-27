import { Pagination } from '../graphql'

interface Cursor {
  id: string
}

const getCursor = (x: string): { id: string } => ({ id: x })

const getPagination = (
  p: Pagination
): {
  take?: number
  skip?: number
  cursor?: Cursor | undefined
} => {
  return {
    take: p?.take ?? 10,
    skip: p?.skip ?? 0,
    cursor: p?.cursor ? getCursor(p.cursor) : undefined,
  }
}

export { getPagination }
