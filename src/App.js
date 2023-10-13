import logo from './logo.svg';
import './App.css';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
  const dataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor(),
    crossDomain: true
  });
  return (
    <ScheduleComponent
    eventSettings={{ dataSource: dataManager }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
  );
}

export default App;
