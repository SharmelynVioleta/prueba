import { Article } from '../../interface/interface';
interface Props {
    author: string,
    content: string,
    photo: string,
    icon: string
}

export const OpinionCard: React.FC<Props> = ({ author, content, photo, icon }) => {
    return (
        <div className="opinionCard">
            <div>
                <a itemProp='url' href={`/`} >
                    <img src={photo ? photo : ""} className="link" />
                </a>
                <h4 className="titulo">
                    {author ? author : ""}
                </h4>
                <h3 className="subtitulo">
                    {content ? content : ""}
                </h3>
                <a itemProp='url' href={`/`}>
                    <img src={icon ? icon : ""}   className="icon"/>
                </a>

            </div>
        </div>
    )
}