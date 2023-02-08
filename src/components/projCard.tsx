import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { VscGithub } from "react-icons/vsc";

interface projProps {
    name: string
    link: string
    image: string
}

export function ProjCard(props: projProps) {
    return (

        <div className="h-60 m-10 lg:container">
            <AspectRatio.Root className="lg:w-10/12 sm:w-screen">
                <img
                    className="object-cover rounded-lg h-60 w-full"
                    src={props.image}
                    alt="image"
                />

                <div className="group flex justify-center items-center absolute top-0 h-60 w-full bg-black/30 hover:backdrop-blur-sm hover:bg-black/70 border-white/10  rounded-lg hover:border-2 hover:shadow-zinc-700/20 hover:shadow-xl">
                    <div className="text-center opacity-5 group-hover:opacity-100">
                        <h3 className="text-white font-bold p-5 pb-0">{props.name}</h3>
                        <br />

                        <a href={props.link} target="_blank" className="bottom-0 inline-flex items-center text-zinc-100 hover:text-zinc-300 font-bold text-md no-underline uppercase">
                            Página do projeto &nbsp;&nbsp; <VscGithub className="text-2xl"/>
                        </a>
                        
                    </div>
                </div>
            </AspectRatio.Root>
        </div>

    )
}