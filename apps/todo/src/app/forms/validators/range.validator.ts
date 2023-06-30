import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {format, isAfter} from "date-fns";

export class todoValidators {
  //both function and method are used in the same way : validators: [todoValidators.passwordsAreEqual, todoValidators.areEqual]
  //is this a function - advantage is type definition with ValidatorFn - will not allow control: FormControl - prevent app crash
  public static areEqual: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const passwordRepeat = control.get('passwordRepeat')?.value;

    return password === passwordRepeat ? null : { notEqual: true };
  };

  //this is a method
  public static passwordsAreEqual(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const passwordRepeat = control.get('passwordRepeat')?.value;

    return password === passwordRepeat ? null : { notTheSame: true };
  };

  //wrap function into method - advantage is type definition - need to call it like so todoValidators.equalityValidator()
  public static equalityValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const passwordRepeat = control.get('passwordRepeat')?.value;

      return password === passwordRepeat ? null : { didNotPassEqualityCheck: true };
    };
  }

  //this is a method, returns an arrow function (arrow function is always anonymous)
  public static erEtter(slutt:AbstractControl, start:AbstractControl): ValidatorFn {

    //dette er validator funksjon (arrow function)
    return (control: AbstractControl):ValidationErrors | null=>
    {
      let eretter = true;
      if (!!slutt && !!start) {
        eretter = slutt.value > start.value
      }
      return eretter ? null : { erIkkeEtter: true };
    }
  }

  public static forbiddenNumberValidator(testnum: number): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null =>
    {
      const forbidden = testnum === +control.value;
      return forbidden ? {forbiddenNumber: true} : null;
    };

  }

  public static gyldigPeriode(feltnavn1: string, feltnavn2: string): ValidatorFn {
    // @ts-ignore
    return (fg: FormGroup): ValidationErrors | null => {
      const verdi1 = fg.controls[feltnavn1]?.value;
      const verdi2 = fg.controls[feltnavn2]?.value;
      const beggeUtfylt = (verdi1 != null || verdi1 != "") && (verdi2 != null || verdi2 != "");

      if (beggeUtfylt) {
        const dato1 = new Date(verdi1);
        const dato2 = new Date(verdi2);

        if (dato1 > dato2) {
          return { gyldigPeriode: true };
        }
      }

      return null;
    };
  }

}

/*
//named function return arrow function
function createPromoRangeValidator(): ValidatorFn {
  return (form: FormGroup): Validators | null => {
    return null;
  }
}

//named function return anonymous function
function createPromoRangeValidator2(): ValidatorFn {
  return function (form: FormGroup): Validators | null {
    return null;
  }
}
*/
//arrow function returns anonymous arrrow function?

//arrow function expression
const fullfortDatoEtterOppstart: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  return null;
}

// Named function
function greet(name: string) {
  return 'hello ' + name
}

// Function expression
let greet2 = function(name: string) {
  return 'hello ' + name
}

// Arrow function expression
let greet3 = (name: string) => {
  return 'hello ' + name
}


