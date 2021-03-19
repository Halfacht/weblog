export function capitalizeFirstLetter(string) {
    if (!(typeof string === 'string' || string instanceof String)) {		
        return '';
    }
	
    return string.charAt(0).toUpperCase() + string.slice(1);
}
