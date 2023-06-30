import { Component, OnInit } from '@angular/core';

import {
  format,
  compareAsc,
  formatISO,
  formatRFC3339,
  formatRFC7231,
  formatISO9075,
  isValid,
  parse,
  isAfter
} from 'date-fns'
import * as moment from 'moment';

@Component({
  selector: 'app-date-demo',
  templateUrl: './date-demo.component.html'
})
export class DateDemoComponent implements OnInit {

  //vanilla JS
  date_now = new Date()
  date_now_iso = this.date_now.toISOString()
  date_now_iso_mod = this.date_now.toISOString().split('.')[0]+"Z" //https://stackoverflow.com/questions/34053715/how-to-output-date-in-javascript-in-iso-8601-without-milliseconds-and-with-z
  date_utc = this.date_now.getUTCDate()
  date_for_api = new Date('2007-12-03T10:15:30Z');

  //date-fns
  date_format1 = format(this.date_now, 'yyyy-mm-dd-HH:m:s')
  date_fns_iso = formatISO(this.date_now)
  date_fns_iso2 = formatISO(this.date_now, {format: "basic"})
  date_fns_iso3 = formatISO(this.date_now, {format: "extended"})
  date_fns_iso4 = formatISO(this.date_now, {format: "extended", representation: "date"})
  date_fns_iso5 = formatISO(this.date_now, {format: "extended", representation: "time"})

  date_rfc3339 = formatRFC3339(this.date_now)
  date_rfc3339_static = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
  date_rfc7231 = formatRFC7231(this.date_now)
  date_iso9075 = formatISO9075(this.date_now)

  //from object to string
  custom_fns1 = format(this.date_now, 'yyyy-mm-dd') + "T"
    + format(this.date_now, 'HH') + ":"
    + format(this.date_now, 'mm') + ":"
    + format(this.date_now, 'ss')
    + format(this.date_now, 'X')

  custom_fns2 = format(this.date_now, 'LLLL')

  result1 = formatISO(new Date(2019, 8, 18, 19, 0, 52))

  //moment
  moment_now = moment()
  moment1 = moment(this.moment_now, "MM-DD-YYYY");
  moment2 = moment().format('LLLL')
  moment3 = moment()

  //1. JS Date()
  //2. date-fns formatting


  constructor() {
    this.test();
    console.log("date_format1", typeof this.date_format1)
    console.log("date_fns_iso", typeof this.date_fns_iso)
    console.log("date_rfc3339", typeof this.date_rfc3339, "\n", this.date_rfc3339)
    console.log("moment1", typeof this.moment1, "\n", this.moment1)
    console.log("moment2", typeof this.moment2, "\n", this.moment2)
    console.log("date_utc", typeof this.date_utc, this.date_utc)
  }

  test() {
    const date = moment();
    let todayDate = date.format('M/D/YYYY');
    console.log(todayDate);
  }

  fortid = '25.11.1999'
  fortidObj!: Date;
  fremtid = '25.11.2090'
  fremtidObj!: Date;

  moment_obj: any;
  parsed!: Date;
  date_is_valid: boolean = false;
  testval: any = 'p';
  ngOnInit(): void {
    console.log("result", this.testval == null || this.testval === '' || false  ? null : { datoFortid: true })
    //today is after datestring ?
    this.fortidObj = parse(this.fortid, 'dd.MM.yyyy', new Date())
    this.fremtidObj = parse(this.fremtid, 'dd.MM.yyyy', new Date())
    console.log("er fortid?: ", isAfter(new Date(this.fortidObj), new Date())) //false
    console.log("er fortid?: ", isAfter(new Date(), new Date(this.fortid))) //true
    console.log("er fremtid: ", isAfter(new Date(this.fremtidObj), new Date())) //true
    console.log("er fremtid: ", isAfter(new Date(), new Date(this.fremtidObj))) //false



    // console.log("parsed", this.parsed, ". type: ", typeof this.parsed)
    // console.log("stringify", JSON.stringify(this.parsed))
    //
    // this.date_is_valid = isValid(this.parsed)
    // console.log("is valid", this.date_is_valid)

    // console.log(format(new Date(this.datestring), 'dd.MM.yyyy'))

    // this.moment_obj = moment(this.datestring, 'DD.MM.YYYY', true)
    // console.log("moment with invalid string: ", this.moment_obj)
    // console.log("moment is valid?", this.moment_obj.isValid())

    //same process with moment and date fns:
    //1. create object
    // date fns - parse(this.datestring, 'dd.MM.yyyy', new Date())
    // moment - moment
    //2. run method to check if valid
    //
  }

}

// parse is used to convert string to Date
// format is used to convert Date to string
