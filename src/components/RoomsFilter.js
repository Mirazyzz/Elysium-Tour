import { React, useContext } from 'react';
import 'react-day-picker/lib/style.css';
import { makeStyles } from '@material-ui/core/styles';

import { RoomContext } from '../Context';
import Title from './Title';
//import DateTimePicker from './DatePicker';
import Slider from './SelectRange';
import NativeSelects from './Select';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 200,
  },
}));

// get unique values of rooms data
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const prices = [...new Set(rooms.map((room) => room.price))];
  const classes = useStyles();

  const {
    handleChange,
    //handleDayClick,
    handlePriceChange,
    //selectedDate,
  } = context;

  let types = getUnique(rooms, 'type');
  // add 'all' type
  types = ['all', ...types].sort((a, b) => a.length - b.length);

  // get data in JSX format

  let pricesFor = ['1 day', '1 week', '1 month', '6 months'];

  return (
    <section className="filter-container">
      <Title title="Поиск туров" />
      <form className="filter-form">
        {/*select type */}
        <form className="filter-form">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Страна поездки</InputLabel>
          <Select native defaultValue="" id="grouped-native-select">
            <option aria-label="None" value="" />
            <optgroup label="Турция">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
            </optgroup>
            <optgroup label="Египет">
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
            </optgroup>
            <optgroup label="ОАЭ">
              <option value={5}>Option 3</option>
              <option value={6}>Option 4</option>
            </optgroup>
          </Select>
        </FormControl>
        {/*end select type */}
          {/*guests */}
          <div className="form-group">
            <NativeSelects
              items={pricesFor}
              selectName="capacity"
              title="Длительность"
              handleChange={handleChange}
            />
          </div>
          {/*end guests */}

          {/*room price */}
          <div className="form-group">
            <Slider
              className="form-control"
              marks={prices}
              title="Цена"
              handleChange={handlePriceChange}
            />
          </div>
          {/*end price */}
        </form>
      </form>
    </section>
  );
}
