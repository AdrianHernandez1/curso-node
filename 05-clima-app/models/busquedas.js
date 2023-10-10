import axios from 'axios';

class Busquedas {
    historial = ['Trgucigalpa', 'Madrid', 'San Jose'];

    constructor() {
        //TODO: Leer BD si existe
    }

    get paramsMapbox(){
        return {
            'language': 'es',
            'access_token':process.env.MAPBOX_KEY,
            'limit': 5,
            
        }
    }

    async ciudad(lugar = '') {
        //peticion http
        try {
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox

            });

            const resp = await intance.get();
            // console.log(resp.data);
            return resp.data.features.map(lugar =>({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));
        } catch (error) {
            return [];
        }
    }
}

export { Busquedas }