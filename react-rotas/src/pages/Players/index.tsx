import vini from './pictures/vini.png';

export function Players(){

    const teams = ['Vini. Jr', 'Neymar', 
                    'Mbampé', 'CR7', 'Messi'];
    
    return (
        <>
            <h1>Players</h1>
            <img src={vini} alt="Vini Jr." />
            <ul>
                {teams.map(team => <li>{team}</li>)}
            </ul>
        </>
    )
}