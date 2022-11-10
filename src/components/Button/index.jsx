import "./button.css"

function Button({variante, text}){
  return(
    <>
      <button className={variante}>{text}</button>
    </>
  )
}

export default Button