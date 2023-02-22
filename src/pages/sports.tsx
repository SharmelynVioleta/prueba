import { useEffect, useState } from 'react';
import { Header } from '../components/header/header';
import { NormalCard } from '../components/normal-card/normalCard';
import { OpinionCard } from '../components/opinion-card/opinionCard';
import { getNews } from '../helpers/getnews';
import { Article } from '../interface/interface';

export const Sports = () => {
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
        <>
            <Header type="Sports" color="green" next="/international"/>
            <div className='container-sports'>
                {
                    articles.map((card, index) => (
                        <NormalCard
                            article={card}
                            background={'white'}
                            icon={"icono.svg"}
                        />
                    ))
                }

                <h3 className='h3-section'>OPINIÓN</h3>
                <OpinionCard
                    photo={"1.jpg"}
                    author={"Juan Jose pollas"}
                    content={"El Barca y una mancha inexplicable"}
                    icon={"icono.svg"}/>
                <OpinionCard
                    photo={"2.jpg"}
                    author={"Santiago Segurola"}
                    content={"Un hedor insoportable"} 
                    icon={"icono.svg"}/>
                <OpinionCard
                    photo={"3.jpg"}
                    author={"Xavier Aldekoa"}
                    content={"Gavil, carnaval y los detalles"} 
                    icon={"icono.svg"}/>
                

            </div>




        </>
    )
}