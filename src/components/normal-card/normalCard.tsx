import { Article } from '../../interface/interface';
interface Props {
    article: Article,
    background: string,
    icon: string
}

export const NormalCard: React.FC<Props> = ({ article, background,icon }) => {
    return (
        <div className="normalCard">
            <div className={background}>
                <a itemProp='url' href={`/`} className="link">
                    <img src={article ? article.urlToImage : ""} className={'img'} />
                </a>
                <h4 className="titulo">
                    {article ? article.title : ""}
                </h4>
                <h3 className="subtitulo">
                    {article ? article.description : ""}
                </h3>
                <h5 className="autor">
                    {article ? article.author : ""}
                </h5>
                <a itemProp='url' href={`/`}>
                    <img src={icon ? icon : ""} className="icon" />
                </a>

            </div>
        </div>
    )
}