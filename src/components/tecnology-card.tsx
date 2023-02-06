import Rating from '@mui/material/Rating';

interface tecnology {
    name: string
    image: string
    color: string
    level: number
}

export function TecnologyCard(props: tecnology) {

    return (
        <div className="w-52 h-80 flex justify-center items-center rounded-xl border-2" style={{ borderColor: props.color || '#000', boxShadow: '1px 1px 15px 1px' + props.color }}>
            <div>
                <img src={props.image} alt="" className="h-28" />
                <p className="font-bold m-4 text-center">{props.name}</p>

                <Rating name="read-only" value={props.level} readOnly className='' />
            </div>
        </div>
    )
}