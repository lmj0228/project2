import React, { useState } from 'react';
import '../App.css';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.username) {
      errors.username = '아이디를 입력하세요.';
    }

    if (!formData.password) {
      errors.password = '비밀번호를 입력하세요.';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('회원가입이 완료되었습니다.');
      // 여기서 서버로 데이터를 보내는 코드를 작성할 수 있습니다.
    }
  };

  return (
    <div className="Login">
      <h1>로그인</h1><br/>

      <form className='form2' onSubmit={handleSubmit}>

        <div className="form-group">
          <label>아이디</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">로그인</button>
        
      </form>
      
    </div>
  );
}

export default Login;
