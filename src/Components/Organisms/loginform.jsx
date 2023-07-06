import Container from "../Atoms/container";
import Button from "../Atoms/button";
import InputGroup from "../Molecules/inputgroup";
import { useState } from "react"
import useInput from "../../Hooks/useinput";

const LoginForm = ( ) => {
  const inputStyle = "text-justify items-center m-2 p-2 border-solid border-2 rounded"

  // const { value, handleOnChange } = useInput({
  //   email:"",
  //   password:"",
  // })

  return (
    <Container className="border-solid border-2 ">
      <div className="object-center	text-xl p-3 m-3 font-semibold text-center">Sign in</div>
      <InputGroup 
        id="email" 
        type="email" 
        placeholder="아이디(이메일)" 
        label="이메일" 
        // value={value.email}
        // onChange={handleOnChange}
        className={inputStyle} 
      />
      <InputGroup 
        id="password" 
        type="password" 
        placeholder="비밀번호" 
        label="비밀번호" 
        // value={value.password}
        // onChange={handleOnChange}
        className={inputStyle} 
      />
      <Button className="items-center w-2/3 mx-32 mb-2 py-2 mt-3 rounded bg-amber-300">로그인</Button>
    </Container>
  )
}

export default LoginForm;