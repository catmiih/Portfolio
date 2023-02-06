import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TecnologyCard } from './tecnology-card';

export function Tecnologies() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="p-40 text-white">
            <h1 className='font-bold text-center'>Tecnologias nas quais tenho conhecimento</h1>
            <br />
            <Carousel responsive={responsive} className="p-5">
                <TecnologyCard name="HTML5" image="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" color='#f06529' level={5} />
                <TecnologyCard name="CSS3" image="https://logospng.org/download/css-3/logo-css-3-2048.png" color='#264de4' level={5} />
                <TecnologyCard name="JavaScript" image="https://logospng.org/download/javascript/logo-javascript-icon-1024.png" color='#f0db4f' level={5} />
                <TecnologyCard name="Bootstrap" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" color='#461d7c' level={5} />
                <TecnologyCard name="JQuery" image="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png" color='#264de0' level={5} />
                <TecnologyCard name="PHP" image="https://www.cursou.com.br/wp-content/uploads/2017/10/Curso-de-PHP-PSRs.png" color='#787cb5' level={5} />
                <TecnologyCard name="MySQL" image="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" color='#00758f' level={5} />
                <TecnologyCard name="Kotlin" image="https://seeklogo.com/images/K/kotlin-logo-6A9E0484CA-seeklogo.com.png" color='#B125EA' level={3} />
                <TecnologyCard name="Kali Linux" image="https://seeklogo.com/images/K/kali-linux-logo-AED181186E-seeklogo.com.png" color='#264de4' level={5} />
                <TecnologyCard name="React" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" color='#61dbfb' level={3} />
                <TecnologyCard name="TypeScript" image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" color='#007acc' level={3} />
                <TecnologyCard name="NodeJS" image="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" color='#3c873a' level={2} />
                <TecnologyCard name="Prisma" image="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png" color='#264090' level={2} />
                <TecnologyCard name="Laravel" image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" color='#f05340' level={4} />
                <TecnologyCard name="Windows" image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/2048px-Windows_logo_-_2012_%28dark_blue%29.svg.png" color='#0078d7' level={5} />
                <TecnologyCard name="TailwindCSS" image="https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png" color='#264de0' level={4} />
                <TecnologyCard name="Java" image="https://cdn-icons-png.flaticon.com/512/3291/3291669.png" color='#f14c4d' level={3} />
            </Carousel>
        </div>
    )
}