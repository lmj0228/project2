import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Community.css';

const Community = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://10.125.121.206:8080/api/board1/list?page=${currentPage}&size=10`);
      setData(response.data.dtoList);
      setTotalPages(response.data.totalPage);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  if (loading) {
    return <div className="content">Loading...</div>;
  }

  if (error) {
    return <div className="content">{error}</div>;
  }

  return (
    <div className="content">
      <h2>소통하기</h2>

      <table>
        <thead>
          <tr>
            <th className='th1'>번호</th>
            <th className='th2'>제목</th>
            <th className='th3'>작성자</th>
            <th className='th4'>작성일</th>
            <th className='th5'>조회수</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((item) => (
            <tr key={item.seq}>
              <td>{item.seq}</td>
              <td>{item.title}</td>
              <td>{item.id}</td>
              <td>{new Date(item.curdate).toLocaleDateString()}</td>
              <td>{item.cnt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>이전</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>다음</button>
      </div>
    </div>
  );
};

export default Community;

