import { useEffect, useState } from 'react';
import { Card } from '../components/card/card'
import { Header } from '../components/header/header';
import { Minicard } from '../components/minicard/minicard';
import {LargeCard } from '../components/largeCard/largeCard';
import { NormalCard } from '../components/normal-card/normalCard';
import { getNews } from '../helpers/getnews';
import { Article } from '../interface/interface';


export const International = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [dataArticleMini, setDataArticleMini] = useState<Article[]>([]);
    const getNote = async () => {
        const data: any = await getNews();
        const dataArticles = data.slice(0, 5);
        const miniData = data.slice(13, 15);

        setDataArticleMini(miniData);
        setArticles(dataArticles);
    }
    useEffect(() => {
        getNote();
    }, [])

    return (
        <>
            <Header type="International" color="blue" next ="/sports"/>
            <div className='container'>
                {
                    articles.map((card, index) => (

                        index === 2 ?
                            <LargeCard
                                article={card}
                            />
                            :
                            (index === 3 ?

                                <Minicard
                                    article={dataArticleMini}
                                />
                                : (index === 1 ?

                                    <NormalCard
                                        article={card}
                                        background={'white'}
                                        icon ={""}
                                    />
                                    : (index === 4 ?

                                        <NormalCard
                                            article={card}
                                            background={'gray'}
                                            icon ={""}
                                        />
                                        : <Card
                                            article={card}
                                            
                                        />
                                    )
                                )
                            )
                    ))
                }
            </div>
        </>

    )
}