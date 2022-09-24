export const Button = ({ label, color, handleClick, double = false }) => {
  return(
    <button
      className={`button button-${color} ${double ? 'button-double' : ''}`}
      onClick={handleClick}
      role="button"
    >
      { label }
    </button>
  )
}
