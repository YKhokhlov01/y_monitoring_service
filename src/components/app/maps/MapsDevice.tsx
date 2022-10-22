import { YMaps, Map, Placemark, } from '@pbe/react-yandex-maps';
interface IDeviceMaps {
    devices: {
      id: number,
      name: string , 
      comment: string,
      latitude: number,
      longitude: number,
      userId: number,
    }[] 
  }
  
  const MapsDevice = ({devices}: IDeviceMaps ) => {
          let devicesMap = devices.map((device, index) =>
    <Placemark key={index} geometry={ { type: "Point",
    coordinates:[device.latitude,device.longitude]} }
        properties={{          
          iconContent:`${device.id}`,
          hintContent:device.name,          
          balloonContent: ` ${device.name} <br> "${device.comment}"`
      }}
      options={{
        preset: 'islands#blueCircleDotIconWithCaption',
        
      }}
      modules={       
          ['geoObject.addon.balloon', 'geoObject.addon.hint']
      }
      />
  );
    console.log('devices121', devices)
    return (   
<YMaps>
    <Map className='flex justify-center items-center content-center h-screen w-screen bg-slate-100' defaultState={{
    center: [55.751574, 37.573856],
    zoom: 5
  }} 
  width={500} 
  height={500}
   >
   {devicesMap}
    </Map>
  </YMaps>
    )
  }
  
  export default MapsDevice