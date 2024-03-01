interface HeadProps {
    title: string,
    description?: string
}

export const Head = ({ title, description }: HeadProps) => {
    document.title = `Food Commerce | ${title}`
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.querySelector('[name=description]')?.setAttribute('content', description!)

    return null
}