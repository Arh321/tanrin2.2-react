

const Input = ({change}) => {

    return(
        <div>
            <label htmlFor="name">Your Input</label>
            <input id="name" type="text" onChange={(e) => change(e.target.value)}/>
        </div>
    )
}

export default Input;