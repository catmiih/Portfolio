import background from './../assets/background.gif'

export function Banner() {

    return (
        <div className="flex h-screen justify-center items-center text-white bg-backgroundImg bg-fixed bg-no-repeat bg-cover">
            <div className='flex h-screen w-screen justify-center items-center backdrop-blur-sm bg-black/90'>
                <div>
                    <h1 className='uppercase font-bold text-center'>Boas vindas ao meu portfólio!</h1>
                    <h5 className="text-center font-light">Me chamo Emily e sou desenvolvedora fullstack!</h5>
                    <br />
                    <p className="text-center font-light">
                        “Se você realmente acredita naquilo que faz e está disposto a trabalhar duro, então você provavelmente será bem-sucedido.”
                        <p className='font-bold'>- Pierre Omidyar</p>
                    </p>

                </div>
            </div>
        </div>
    )
}