import { Skeleton } from '../../Skeleton'
import * as C from './styles'

export const SkeletonSnacks = () => {
    return (
        <div className='skeleton-wrapper'>
            <C.Container>
                <Skeleton type="title" />
                <Skeleton type="thumbnail" />
                <Skeleton type="text" />
                <Skeleton type="text" />

                <div>
                    <Skeleton type="title" />
                    <Skeleton type="image" />
                </div>
            </C.Container>
        </div>
    )
}