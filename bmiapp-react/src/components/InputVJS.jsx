export function InputVJS({name, onChangeCallback}){
    return (
        <>
        <input type="text" 
          value={name} 
          onChange={onChangeCallback} 
          placeholder='Digite seu nome aqui..' />
        </>
    )
}