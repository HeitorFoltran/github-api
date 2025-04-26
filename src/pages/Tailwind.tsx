import { useState } from 'react'
import { endpoint } from './Endpoint'

function TelaTailwind() {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState<any>(null)
    const [erro, setErro] = useState('')
    const [condicaoEspecial, setCondicaoEspecial] = useState(false)

    const handleSearch = async () => {
        try {
            const response = await endpoint(username)
            setUserData(response.data)
            setErro('')

            if (username == 'WillGabrielc137') {
                setCondicaoEspecial(true)
            } else {
                setCondicaoEspecial(false)
            }

        } catch (error) {
            setUserData(null)
            setErro('Usuário ' + username + ' não encontrado.')
        }
    }

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            <div className="flex flex-col items-center pt-10 space-y-6">
                <h1 className="text-2xl font-bold transition-all duration-1000 hover:text-blue-300">
                    Buscar Perfil
                </h1>

                <input
                    type="text"
                    placeholder="Insira o username"
                    className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button
                    onClick={handleSearch}
                    className="font-bold text-white transition-all duration-500 transform hover:scale-110"
                >
                    BUSCAR
                </button>
            </div>

            <div className="flex-1 flex justify-center items-center">
                {erro && (
                    <p className="text-white transition-all duration-700 transform hover:scale-110 hover:text-red-600 font-bold">{erro}</p>
                )}

                {userData && (
                    <div className={`flex flex-col items-center space-y-6 mt-6 p-6 rounded-lg w-full max-w-xs border-4 ${condicaoEspecial ? 'border-pink-600' : 'border-blue-300'}`}>
                        <img
                            src={userData.avatar_url}
                            alt="Avatar"
                            className="w-24 h-24 rounded-full"
                        />
                        <h2 className="text-2xl font-bold">
                            {condicaoEspecial ? 'Homem mais GAY do planeta rosa 💅🏳️‍🌈💅🏳️‍🌈💅🏳️‍🌈' : userData.name}
                        </h2>
                        <p className="text-center max-w-xs">
                            {condicaoEspecial ? 'Tendências homossexuais alarmantes' : userData.bio}
                        </p>

                        <div className="text-center space-y-2">
                            {userData.location && (
                                <p className="text-sm">{userData.location}</p>
                            )}
                            <p className="text-sm">Repositórios públicos: {userData.public_repos}</p>
                            <p className="text-sm">Seguidores: {userData.followers}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TelaTailwind;
