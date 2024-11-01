async function loginUser(email, password) {
  const response = await fetch(
    "http://ailikehuman-env.eba-8emax5ah.ap-south-1.elasticbeanstalk.com/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log("로그인 성공:", data);
    // 성공 시 추가 작업을 여기에 구현 (예: 페이지 리다이렉션)
  } else {
    console.error("로그인 실패:", response.statusText);
    alert("로그인 실패: " + response.statusText);
  }
}

async function signupUser(name, email, password) {
  const response = await fetch(
    "http://ailikehuman-env.eba-8emax5ah.ap-south-1.elasticbeanstalk.com/api/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }
  );

  if (response.ok) {
    const data = await response;
    console.log("회원가입 성공:", data);
    // 성공 시 추가 작업을 여기에 구현 (예: 페이지 리다이렉션)
  } else {
    console.error("회원가입 실패:", response.statusText);
    alert("회원가입 실패: " + response.statusText);
  }
}
