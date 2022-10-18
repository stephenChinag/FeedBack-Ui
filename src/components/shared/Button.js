const Button =({children ,version, type,isDisabled})=>{
return (
    <div>

        <button 
        type={type} 
       disabled={isDisabled}
        className ={`btn btn-${version}`}>
            {children}</button>
    </div>
)
}
export default Button ;