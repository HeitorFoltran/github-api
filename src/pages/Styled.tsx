// Sliced
import { useState } from 'react'
import styled from 'styled-components'
import { endpoint } from './Endpoint'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
  color: white;
`

const Topo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  gap: 1.5rem;
`

const Titulo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  transition: all 1s;
  &:hover {
    color: rgb(227, 62, 62);
  }
`

const Input = styled.input`
  padding: 0.5rem;
  background-color:rgb(31, 40, 54);
  color: white;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 3px rgb(213, 40, 40);
  }
`

const Botao = styled.button`
  font-weight: bold;
  color: white;
  background: none;
  border: none;
  transition: all 0.5s;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
`

const MensagemErro = styled.p`
  color: white;
  font-weight: bold;
  transition: all 0.7s;
  &:hover {
    color: #dc2626;
    transform: scale(1.1);
  }
`

const Cartao = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 2px solid rgb(233, 45, 45);
  border-radius: 0.5rem;
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
`

const TextoNome = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`

const TextoResto = styled.p`
  text-align: center;
  max-width: 16rem;
`

function TelaStyled() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState<any>(null)
  const [erro, setErro] = useState('')

  const handleBusca = async () => {
    try {
      const resposta = await endpoint(username)
      setUserData(resposta.data)
      setErro('')
    } catch (erro) {
      setUserData(null)
      setErro('Usuário ' + username + ' não encontrado.')
    }
  }

  return (
    <Container>
      <Topo>
        <Titulo>Buscar Perfil</Titulo>

        <Input
          type="text"
          placeholder="Insira o username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Botao onClick={handleBusca}>BUSCAR</Botao>
      </Topo>

      <div className="flex-1 flex justify-center items-center">
        {erro && <MensagemErro>{erro}</MensagemErro>}

        {userData && (
          <Cartao>
            <Avatar src={userData.avatar_url} alt="Avatar" />
            <TextoNome>{userData.name}</TextoNome>
            <TextoResto>{userData.bio}</TextoResto>
            <TextoResto>
            {userData.location && (
                <p>{userData.location}</p>
              )}
              <p>Repositórios públicos: {userData.public_repos}</p>
              <p>Seguidores: {userData.followers}</p>
            </TextoResto>
          </Cartao>
        )}
      </div>
    </Container>
  )
}

export default TelaStyled
