//Компонет таблицы для вывода данных значений сенсора
function SensorTable({ dataSensor }: any) {
    // Добавление в массив отдельно даты и времени в стандартном формате. Разворот данных для удобства пользователя 
    const normalData = dataSensor.map((elm: any) => {
      const parseDate = Date.parse(elm.timestamp);
      const newDate = new Date(parseDate).toLocaleDateString();
      const newTime = new Date(parseDate).toLocaleTimeString();
      return {
        ...elm,
        date: newDate,
        time: newTime
      }
    }).reverse();
    // Заполнение таблицы данных из массива
    const tabSensors = normalData.map((elm: any, index: number) => {
      return (
        <tr key={elm.id}>
          <td className="border-2 border-sky-200 bg-slate-100 rounded-sm hover:border-sky-300 hover:bg-slate-200 text-sm text-blue-500"  >{index + 1}</td>
          <td className="border-2 border-sky-200 bg-slate-100 rounded-sm hover:border-sky-300 hover:bg-slate-200 text-sm text-blue-500 " >{elm.date}</td>
          <td className="border-2 border-sky-200 bg-slate-100 rounded-sm hover:border-sky-300 hover:bg-slate-200 text-sm text-blue-500" >{elm.time}</td>
          <td className="border-2 border-sky-200 bg-slate-100 rounded-sm hover:border-sky-300 hover:bg-slate-200 text-sm text-blue-500" >{elm.value}</td>
        </tr>
      );
    });
    return (
        <div className="flex content-center flex-col items-center self-center justify-center mt-1 h-9/12 w-11/12 mb-2">
      <table className="border-separate border-spacing-0 self-center border-sky-300 border-[1px] table-fixed  rounded  w-10/12 h-8/12 text-center text-sm bg-slate-100   ">
        <thead>
          <tr>
            <th className="border-2 border-sky-300 bg-slate-100  w-1/8 hover:border-sky-300 text-base text-blue-500 " >#</th>
            <th className="border-2 border-sky-300 bg-slate-100  hover:border-sky-300 text-base text-blue-500 ">Дата</th>
            <th className="border-2 border-sky-300 bg-slate-100  w-1/8 hover:border-sky-300 text-base text-blue-500 " >Время</th>
            <th className="border-2 border-sky-300 bg-slate-100  after:w-1/2 hover:border-sky-300 text-base text-blue-500  "  >Значение</th>
          </tr>
        </thead>
        <tbody>
          {tabSensors}
        </tbody>
      </table>
      </div>
    )
  }
  export default SensorTable