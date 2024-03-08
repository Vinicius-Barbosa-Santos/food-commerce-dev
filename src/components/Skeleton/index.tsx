import * as C from './styles'

export interface SkeletonProps {
    type: 'title' | 'text' | 'image' | 'thumbnail'
}

export const Skeleton = ({ type }: SkeletonProps) => {
    return <C.SkeletonElement type={type} />
}