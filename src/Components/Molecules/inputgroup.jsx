import Input from "../Atoms/input"
import Box from "../Atoms/box"
import Label from "../Atoms/label"

const InputGroup = ({ id, type, value, onChange, className, label, placeholder}) => {
  return (
    <> 
      <Label htmlFor={id} children={label} />
      <Box className={className}>
      <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
      </Box>
    </>
  )
};

export default InputGroup;