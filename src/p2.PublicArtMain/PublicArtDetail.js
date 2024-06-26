import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../components/Modal';
import Kakao from '../components/Kakao';
import './PublicArtDetail.css';

export default function PublicArtDetail() {
  const location = useLocation();
  const items = location.state;
  const [showModal, setShowModal] = useState(false);

  // items 객체에서 필요한 값 추출
  const { addr1, addr2, areaCode, artId, content, installed, mainAgent, manageAgency, positionCode,
    positionName, purpose, Shape, Spec, Struct, title, imgSrc, codeName } = items;

  // 상대 URL을 절대 URL로 변환
  const absoluteImgUrl = imgSrc.startsWith('http') ? imgSrc : `http://${imgSrc}`;

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

 
  return (
    <div className='w-7/12 flex flex-col justify-center items-center'>
      <div className='spacing'></div>

      <div className='boxs'>

        <div className='box1 flex-col'>
          <img className="detail-image" src={absoluteImgUrl} alt={title}
            onClick={handleImageClick} />
          <div className='text-box'>
            <p className='art-title'>
              제목 : {title}</p>
            <p className='mb-2'>
              내용 : {content.replace(/\[\S*/g, ' ').replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ')
                .replace(/[^0-9a-zA-Z가-힣[\]()\s]/g, ' ').replace(/BR/g, ' ')}</p>
            <p className='mb-2'>
              목적 : {purpose.replace(/\[\S*/g, ' ').replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ')
                .replace(/[^0-9a-zA-Z가-힣[\]()\s]/g, ' ').replace(/BR/g, ' ')}</p>
            <p>※ 자세한 정보를 위해 이미지를 클릭해보세요.</p>
          </div>
        </div>

        <div className='box2 flex-col'>
          <Kakao addr1={addr1} />
          <p className='address'>주소 : {addr1}, {addr2}</p>
        </div>

      </div>

      <div className='spacing'></div>

      <div className='confirmation'>
        <h2>방문 인증하기</h2>
      </div>

      <div className='spacing'></div>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className='modal'>
          <p>조형물ID : {artId}</p>
          <p>설치일자 : {installed}</p>
          <p>형태 : {Shape}</p>
          <p>규격 : {Spec}</p>
          <p>재질 : {Struct}</p>
          <p>위치명 : {positionName}</p>
          <p>위치코드 : {positionCode}</p>
          <p>지역구 : {codeName}</p>
          <p>지역코드 : {areaCode}</p>
          <p>주관기관 : {mainAgent}</p>
          <p>관리기관 : {manageAgency}</p>
        </div>
      </Modal>

    </div>
  );
};

