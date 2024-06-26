import posts from '../data/posts';
import './Project.css';

const Project = () => {
  return (
    <div className="content">
      <h2>계획하기</h2>

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
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Project;

