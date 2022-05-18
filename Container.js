import '../styles/Container.css'

const Container = () => {
    return (
        <div className='Container'>
            <div className="bigContainer">
                <div className="conteudo">
                <h1>Tohu</h1>
                <h4>O que eu posso te recomendar hoje?</h4>
                <select>
                    <option value="1">FILMES</option>
                    <option value="2">SÉRIES</option>
                    <option value="3">LIVROS</option>
                </select>
                </div>
            </div>
    </div>
    )
}

export default Container;