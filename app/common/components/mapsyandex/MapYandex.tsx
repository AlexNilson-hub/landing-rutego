import {YMaps, Map, FullscreenControl, GeolocationControl, RouteButton} from '@pbe/react-yandex-maps';

export default function MapYandex() {
    return (
        <YMaps>
            <div>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9, controls: [], }} width={560} height={320}>
                    <FullscreenControl />
                    <GeolocationControl options={{ float: "left" }} />
                    <RouteButton options={{ float: "right" }} />
                </Map>
            </div>
        </YMaps>
    );
};

