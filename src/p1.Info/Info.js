import './Info.css';
import square from '../images/square.png';
import workFlow from '../images/workFlow.png';

export default function Info() {
  return (
    <div className='w-7/12'>
      <div className='box'></div>
      <h2 className="title1">
        <img src={square} alt="square" className='square' />
        <span>공공조형물 이란?</span>
      </h2>
      <div className="container">
        <p>공공시설에 설치된 조형시설물, 환경시설물, 상징조형물 등</p>
        <p>* 공공시설 : 도로, 공원, 철도, 수도, 항만, 공항, 광장, 녹지시설 등</p>
        <br />
        <p>
          - 조형시설물 : 회화·조각·공예·사진·서예 등<br />
          - 환경시설물 : 벽화·분수대·폭포 등<br />
          - 상징조형물 : 상징탑·상징물
        </p><br />
        <p>※ 단 동상 및 기념비 건립 등은「부산시 동상 및 기념비 건립기준 규칙」적용</p>
      </div>

      <br /><br />
      <h2 className="title1">
        <img src={square} alt="square" className='square' />
        <span>관련규정</span>
      </h2>
      <div className="container">
        <p>부산광역시 공공조형물 건립 및 관리 등에 관한 조례</p>
      </div>
      <br /><br />

      <h2 className="title1">
        <img src={square} alt="square" className='square' />
        <span>업무흐름도 (시유지에 건립시)</span>
      </h2>
      <div className="container">
        <img src={workFlow} alt="workFlow" className='workFlow' />
      </div>
      <br /><br /><br />

      <div className="w-full flex justify-center items-center">
        <a href="https://www.busan.go.kr/depart/culture030302"
          title="새 창" target="_blank" className="linkBtn" rel="noreferrer">
          조형물 정보 바로가기</a>
      </div>

      <br /><br /><br />
    </div>
  )
};

