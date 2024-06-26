import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    gender: '',
    age: '',
    email: ''
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

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (!formData.name) {
      errors.name = '이름을 입력하세요.';
    }

    if (!formData.gender) {
      errors.gender = '성별을 선택하세요.';
    }

    if (!formData.age) {
      errors.age = '나이를 입력하세요.';
    }

    if (!formData.email) {
      errors.email = '이메일을 입력하세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '유효한 이메일 주소를 입력하세요.';
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
    <div className="SignUp">
      <h1>회원가입</h1><br />
      <form className='form1' onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label>비밀번호 확인</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <div className="form-group">
          <label>이름</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group2">
          <label className="gender">성별</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">선택하세요</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        <div className="form-group">
          <label>나이</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="form-group">
          <label>이메일</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignUp;
