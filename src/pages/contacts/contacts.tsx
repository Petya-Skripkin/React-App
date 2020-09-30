import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import classes from './styles.module.scss';

function Contacts() {
    const getPointOptions = () => {
        return {
            preset: 'islands#violetIcon',
        };
    };
    return (
        <YMaps>
            <Map width="100%" height="480px" defaultState={{ center: [43.2512317, 76.9419374, 20], zoom: 13 }}>
                <Placemark defaultGeometry={[43.2642317, 76.9299374, 20]} />
                <Placemark defaultGeometry={[43.2358438, 76.9547722, 15.54]} options={getPointOptions()} />
            </Map>
        </YMaps>
    )
}

export default Contacts;