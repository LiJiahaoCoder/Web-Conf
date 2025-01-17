import { createCell, Fragment } from 'web-cell';

interface Partner {
    title: string;
    name: string;
    logo?: string;
}

export function PartnerGroup({
    title,
    list
}: {
    title: string;
    list: Partner[];
}) {
    return (
        <Fragment>
            <h3 className="mt-4 mb-3">{title}</h3>

            <ul className="list-unstyled d-flex flex-wrap justify-content-around align-items-center">
                {list.map(({ name, logo }) => (
                    <li className="m-3">
                        {logo ? (
                            <img
                                className="img-fluid"
                                style={{ maxWidth: '20em' }}
                                src={logo}
                                alt={name}
                            />
                        ) : (
                            name
                        )}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
