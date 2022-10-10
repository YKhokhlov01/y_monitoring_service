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
    return (
      <div>Maps</div>
    )
  }
  
  export default MapsDevice