import './PublicArtCard.css';
import noImage from '../images/no image.png' ;
import { useNavigate } from 'react-router-dom';

export default function PublicArtCard({ imgSrc, title, items }) {
    // 상대 URL을 절대 URL로 변환
    const absoluteimgSrc = imgSrc.startsWith('http') ? imgSrc : `http://${imgSrc}`;

    const navigate = useNavigate() ; 

    const handleCardClick = () => {
        // 새 창으로 이동하는 코드
        navigate(`/p2/publicArt`, {state: items});
        console.log(items);
    };

    const handleError = (e) => {
        e.target.src = noImage;
        console.log(title);
    };

    return (
        <div className="public-art-card flex justify-between" onClick={handleCardClick}>
            <img className="public-art-image" src={absoluteimgSrc} alt={title} onError={handleError}/>
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="font-bold text-sm mb-2"> ❤&nbsp;💛&nbsp;💚</div>
            </div>
        </div>
    );
};

