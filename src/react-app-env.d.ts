/// <reference types="react-scripts" />
interface IListApp {
    img: string
    link: string
    description: string
    skill: string[]
}

interface ICardProps {
    data: IListApp
}