import { ProjCard } from "./projCard";


export function Projects() {
    return (
        <div>
            <h1 className="text-white text-center font-bold lg:mb-10">Projetos desenvolvidos</h1>
            <br />

            <div className="grid sm:auto-rows-auto lg:grid-cols-3">
                <ProjCard
                    name="Projeto Habits - Mobile"
                    link="https://github.com/catmiih/habits_mobile"
                    image="https://i.imgur.com/GYZySdu.png"
                />

                <ProjCard
                    name="Projeto Habits - Web"
                    link="https://github.com/catmiih/habits_web"
                    image="https://i.imgur.com/jbztiRF.png"
                />

                <ProjCard
                    name="Search Devs"
                    link="https://github.com/catmiih/search-devs_base"
                    image="https://i.imgur.com/oPuWHvL.png"
                />
            </div>

            <p className="lg:flex text-center w-screen text-white uppercase font-bold justify-center text-xl">
                Conheça mais projetos em: &nbsp;
                <a href="https://github.com/catmiih" target="_blank">
                    https://github.com/catmiih
                </a>
            </p>
        </div>
    )
}