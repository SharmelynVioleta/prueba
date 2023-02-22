import { Article } from '../../interface/interface';
interface Props {
    article: Article[],
}

export const Minicard: React.FC<Props> = ({ article }) => {
    return (
        <div className="minicard">
            <div className='row'>
                <div>
                    <a href={`/`} className="link">
                        <img src={article ? article[0].urlToImage : ""} className={'img'} />
                    </a>
                </div>
                <div>
                    <div className="autor">
                        <h4>{article ? article[0].title : ""}</h4>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div>
                    <a href={`/`} className="link">
                        <img src={article ? article[1].urlToImage : ""} className={'img'} />
                    </a>
                </div>
                <div>
                    <div className="autor">
                        <h4>{article ? article[1].title : ""}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}