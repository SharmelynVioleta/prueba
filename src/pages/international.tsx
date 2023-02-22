import { useEffect, useState } from 'react';
import { Card } from '../components/card/card'
import { getNews } from '../helpers/getnews';
import { Article } from '../interface/interface';


export const International = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const getNote = async () => {
        const data: any = await getNews();
        const dataArticles = data.slice(0, 3);
        setArticles(dataArticles);
    }
    useEffect(() => {
        getNote();
    }, [])

    return (
        <div className='container'>
            {
                articles.map((card, index) =>  (
               index ==2 ?
                        <Card
                        article={card}
                        cardName={'large'}
                    />    
               :
                    <Card
                        article={card}
                        cardName={'simple'}
                    />
                    
                ))
            }
        </div>
    )
}