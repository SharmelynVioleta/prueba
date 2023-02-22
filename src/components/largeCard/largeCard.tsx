import { Article } from '../../interface/interface';
interface Props {
    article: Article,
}

export const LargeCard: React.FC<Props> = ({ article }) => {
    return (
        <div className="large">
 
            <div className='content-large'>
                <a href= "/" ><img src="/los-arcos.png" alt="logo-los-arcos" className={'logo'}/></a>
                <h2 className="titulo">
                    LA MEJOR COCINA DE MARISCOS DEL PACÍFICO
                </h2>
                <h3 className="subtitulo">
                    Ven y disfruta de un momento delicioso
                </h3>
                <button name="button">RESERVA YA!</button>

            </div>
        </div>
    )
}