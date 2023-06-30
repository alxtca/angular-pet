import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-felt-wrap',
  templateUrl: './felt-wrap.component.html',
  styleUrls: ['./felt-wrap.component.css']
})
export class FeltWrapComponent implements OnInit {
  @Input() control!: any;

  private feilmeldinger = {
    standardMeldinger: {
      prefiks: (feltnavn:any) => `${feltnavn}`,
      required: 'må fylles ut',
      datoFortid: 'må være dagens dato eller tidligere, og på riktig format',
      datoFremtid: 'må være etter dagens dato',
    },
    prefiks: "prefiks er ikke funksjon",
    // required: 'required i rooten'
  }

  constructor() { }

  ngOnInit(): void {
    this.finneKeyVerdiTilControllenIParent()

    // console.log(this.feilmeldinger['required'])
    // console.log("[][]", this.feilmeldinger['standardMeldinger']['required'])
    // console.log(false || true)
    // console.log(true || false)
    // const regelnavn = 'required'
    // let feltnavn: string = 'required'
    // // @ts-ignore
    // let meldinger = this.feilmeldinger[feltnavn] || this.feilmeldinger.standardMeldinger
    // console.log("||", meldinger)
    // // @ts-ignore
    // const keyVerdi = (this.feilmeldinger[feltnavn] && this.feilmeldinger[feltnavn][regelnavn]) || this.feilmeldinger.standardMeldinger[regelnavn];
    // console.log("keyVerdi: ", keyVerdi)
    // console.log("er funksjon?", typeof this.feilmeldinger.standardMeldinger.prefiks)
    // console.log(this.feilmeldinger.standardMeldinger.prefiks('the_prefiks'))
    // console.log("bare prefiks: ", this.feilmeldinger.standardMeldinger['prefiks'])
    // console.log("prefiks('feilmeldingen'): ", this.feilmeldinger.standardMeldinger['prefiks']('feilmenldingen'))
    // console.log("prefiks er ikke funksjon: ", typeof this.feilmeldinger['prefiks'])
    // console.log(this.feilmeldinger.standardMeldinger['prefiks']({feilmelding: 'feilmenldingen'}))

    this.findControlNameLogs()
  }
  findControlNameLogs() {
    console.log(this.control)
    // console.log(this.control.errors)
    // console.log("this control first error" , Object.keys(this.control.errors)[0])
    // console.log("this control first error verdi" , this.control.errors[Object.keys(this.control.errors)[0]])
    // console.log("parent control", this.control.parent)
    //console.log(this.control.parent?.controls)
    //So I don't know the key of this control on parent
    //How to find it?
    //Iterate through parent controls - get list of control names like so .forEach(name =>
    //and compare each control to current control, when true -> return and save the control name.
    //console.log(this.control.parent?.controls['email'] === this.control)
    //console.log(this.control.parent?.controls['password'] === this.control)
  }

  finneKeyVerdiTilControllenIParent(): void {
    let navn: string | null = null;
    Object.keys(this.control.parent.controls).forEach(name => {
      console.log("parent control: ", name)
      if(this.control === this.control.parent.controls[name]) {
        navn = name;
      }
    })
    console.log("this control is: ", navn)
  }


  //example FormControl object:
  formControl = {
    errors: {required: true}
  }
  //feltnavn: email
  //regelnavn: required
  //errorObject:

  get(feltnavn: string, regelnavn: string, errorObjekt: any){
    //feltnavn - den beregnede feltnavn - som er
    //  variabel navn til FormControl i FormRoot. Hvis ikke gitt i Input()

    //regelnavn - key navn til den første Object.keys(this.control.errors)[0]
    //errorObject/feilMelding - verdi til regelnavn

    //bare lager referanse
    const meldinger = this.feilmeldinger.standardMeldinger // || this.feilmeldinger[feltnavn]

    //kopierer feltnavn i variabel prefiks. - Jeg forstår ikke hvorfor gjøre dette...
    //  So den lagrer i "prefiks" enten funksjon (feltnavn) => `${feltnavn}`
    //  Eller den lagrer i "prefiks" feltnavn - dette skjer aldrig, da prefiks er alltid en funksjon.
    const prefiks = typeof meldinger.prefiks === 'function' ? meldinger.prefiks(feltnavn) : meldinger.prefiks;

    //verdi ex: 'må fylles ut'
    // @ts-ignore
    const keyVerdi = this.feilmeldinger.standardMeldinger[regelnavn];

    //lager melding. Hvis verdi er funksjon - bruker den.
    const melding = typeof keyVerdi === 'function' ? keyVerdi(errorObjekt) : 'translated'// this.translate(keyVerdi);

    //så hva er meldingen?
    return prefiks ? `${prefiks} ${melding}` : melding;
  }

}
