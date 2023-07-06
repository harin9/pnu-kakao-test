import Container from "../Atoms/container";
import Button from "../Atoms/button";
import InputGroup from "../Molecules/inputgroup";
import { useState } from "react"
import { register } from "../../api";
import useInput from "../../Hooks/useinput";


const RegisterForm = ( ) => {
  const inputStyle = "text-justify items-cneter m-2 p-2 border-solid border-2 rounded-lg"

  // const { value, handleOnChange } = useInput({
  //   username: "",
  //   email: "",
  //   password: "",
  //   passwordConfirm: ""
  // })

  return (
    <Container className= "border-solid border-2">
      <div className="object-center	text-xl p-3 m-3 font-semibold text-center">Sign up</div>
      <InputGroup 
        id="username" 
        type="text" 
        placeholder="이름" 
        label="이름" 
        // value={value.username}
        // onChange={handleOnChange}
        className={inputStyle} 
      />
      <InputGroup 
        id="email" 
        type="email" 
        placeholder="이메일" 
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
      <InputGroup 
        id="passwordConfirm" 
        type="password" 
        placeholder="비밀번호 재확인" 
        label="비밀번호 확인" 
        // value={value.passwordConfirm}
        // onChange={handleOnChange}
        className={inputStyle} 
      />    
      <Button 
        // onClick={() => {
        //   register({
        //     username: value.username,
        //     email: value.email,
        //     password: value.password,
        // })
        // }}
        className="items-center w-2/3 mx-32 mb-2 py-2 mt-3 rounded bg-amber-300"
      >
        회원가입
      </Button>
    </Container>
  )
}

export default RegisterForm;