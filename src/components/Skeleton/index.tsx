import * as C from './styles'

export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export function Skeleton({ type }: SkeletonProps) {
  return <C.SkeletonElement type={type} />
}
