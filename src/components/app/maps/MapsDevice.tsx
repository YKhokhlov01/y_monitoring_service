interface IDeviceMaps {
    devices: {
      id?: number,
      name?: string , 
      comment?: string,
      latitude?: number,
      longitude?: number,
      userId?: number,
    }[] 
  }
  
  const MapsDevice = ({devices}: IDeviceMaps ) => {
    console.log('devices', devices)
    return (
      <div>Maps</div>
    )
  }
  
  export default MapsDevice