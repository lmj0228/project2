import { useState, useEffect } from "react";
import PublicArtCard from './PublicArtCard';
import './PublicArtMain.css';

export default function PublicArt() {
  // 부산공공조형물 전체 데이터
  const [tdata, setTdata] = useState([]);
  const [guname, setGuname] = useState([]);
  const [opTags, setOpTags] = useState([]);
  const [selectedGu, setSelectedGu] = useState("강서구");
  const [cardTags, setCardTags] = useState([]);

  // 실제 fetch
  const getData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTdata(data.getPublicArtInfo.body.items.item)
      })
      .catch(err => console.log(err));
  };

  // 부산공공조형물 데이터 fetch
  useEffect(() => {
    let url = `https://apis.data.go.kr/6260000/PublicArt/getPublicArtInfo?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&numOfRows=612&resultType=json`;

    getData(url);
  }, []);

  // 구정보 만들기
  useEffect(() => {
    if (!tdata.length) return;

    let tm = tdata.map(item => item.codeName);
    tm = new Set(tm);
    tm = [...tm].sort();
    setGuname(tm);

  }, [tdata]);

  // 선택된 구의 카드 표시
  useEffect(() => {
    if (!tdata.length || selectedGu === "") {
      // 선택된 구가 없을 때 카드 표시하지 않음
      setCardTags([]);

    } else if (selectedGu === "all") {
      // 전체 카드 초기 표시
      let tm = tdata.map(item =>
        <PublicArtCard
          key={item.artId}  // key prop 추가
          artId={item.artId}
          imgSrc={item.imgSrc}
          title={item.title}
          purpose={item.purpose.replace(/[^0-9a-zA-Z가-힣[\]()\s]/g, '').replace(/BR/g, '')}
          areaCode={item.areaCode}
          items={item} />
      );
      setCardTags(tm);

    } else {
      let tm = tdata.filter(item => item.codeName === selectedGu)
        .map(item =>
          <PublicArtCard
            key={item.artId}  // key prop 추가
            artId={item.artId}
            imgSrc={item.imgSrc}
            title={item.title}
            purpose={item.purpose.replace(/[^0-9a-zA-Z가-힣[\]()\s]/g, '').replace(/BR/g, '')}
            areaCode={item.areaCode}
            items={item} />
        );
      setCardTags(tm);
    }
  }, [selectedGu, tdata]);

  // 선택된 구 변경
  const handleSelectGu = (gu) => {
    setSelectedGu(gu);
  }

  // 구 버튼 생성
  useEffect(() => {
    if (!guname.length) return;

    const guButtons = guname.map(item => (
      <button
        key={item}
        onClick={() => handleSelectGu(item)}
        className={`button-style ${selectedGu === item ? "selected" : ""}`}>
        #{item}
      </button>
    ));

    const allButton = (
      <button
        key="all"
        onClick={() => handleSelectGu("all")}
        className={`button-style ${selectedGu === "all" ? "selected" : ""}`}>
        #전체
      </button>
    );

    const allButtons = [...guButtons, allButton];

    const dividedTags = [];
    const chunkSize = 8;
    for (let i = 0; i < allButtons.length; i += chunkSize) {
      dividedTags.push(allButtons.slice(i, i + chunkSize));
    }

    setOpTags(dividedTags);
  }, [guname, selectedGu]);

  // 데이터 중 "artId"가 "12"인 항목 필터링하여 제거
  useEffect(() => {
    if (!tdata.length) return;
    const filteredData = tdata.filter(item => item.artId !== "12");
    if (filteredData.length !== tdata.length) {
      setTdata(filteredData);
    }
  }, [tdata]);

  return (
    <div className="w-7/12 h-full flex flex-col justify-center items-center">

      <br /><br />
      <label htmlFor="gu" className="title">
        부산광역시 공공조형물 정보
      </label>
      <br /><br />

      <div className="flex flex-wrap w-2/3 justify-center items-center">
        {opTags.map((chunk, index) => (
          <div key={index} className="flex flex-wrap justify-center">
            {chunk}
          </div>
        ))}
      </div>
      <br /><br />

      <div className="card-view w-full grid gap-4 grid-cols-1">
        {cardTags}
      </div>
      <br /><br />

    </div>
  );
};

