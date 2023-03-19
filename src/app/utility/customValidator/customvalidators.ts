import { FormControl, AbstractControl } from '@angular/forms';


export function noSpaceValidator(control: FormControl): { [key: string]: boolean } | null {
	const hasSpace: boolean = /\s/.test(control.value);
	const hasNumbers: boolean = /\d/.test(control.value);
	if (hasSpace) {
		return hasSpace ? null : { 'You used space please make sure to use no space on the name': true };
	} else if (hasNumbers) {
		return hasNumbers ? null : { 'You used numbers on the name are you a robot from space ?': true };
	}
	return null;
}

export function usernameValidator(control: FormControl): { [key: string]: boolean } | null {
	const hasSpace: boolean = /^[a-zA-Z]+([ ]?[a-zA-Z]+)?$/.test(control.value);
	return hasSpace ? null : { 'Username you typed is invalid please make sure to use one space between two names': true };
};

export function matchingPassword(control: AbstractControl): { [key: string]: boolean } | null {
	const samePassword: boolean = control.get('password')?.value === control.get('repassword')?.value;
	return samePassword ? null : { 'Not the same password': true };
};
