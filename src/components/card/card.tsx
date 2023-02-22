import { Article } from '../../interface/interface';
interface Props {
    article: Article,
    cardName: string,
  }

export const Card:React.FC<Props> = ({article, cardName}) => {
    return (
        <div className={cardName}>
        <div>
            <h4 className="titulo">
                Un año en guerra
            </h4>
            <h3 className="subtitulo">
                Meloni viaja a Kyik tras las polémica  porla spalabras de Berlusconi
            </h3>
            <h5 className="autor">
                ANNA BUJ | ROMA
            </h5>
            <a itemProp='url' href={`/`} className={'link'}>
                <img src={article? article.urlToImage: "" } className={'img'} />
            </a>
        </div>
        <div>
           
        </div>
    </div>
    )
}