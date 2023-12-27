import './styles.css';

const Input = ({name, value, onChange, placeholder}) => {
  
  return (
    <input name={name} value={value} onChange={onChange} placeholder={placeholder}/>
  )
  
}

export { Input };