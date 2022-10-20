const Button =({children ,onBlurChangeHandler,version, type,isDisabled,onClickHanler})=>{
return (
    <div>

        <button 
        type={type}
        onBlur={onBlurChangeHandler}
       disabled={isDisabled}
       onClick={onClickHanler}
        className ={`btn btn-${version}`}>
         {children}
         </button>
    </div>
)
}
export default Button ;