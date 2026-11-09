function multiplyValue(value: number, multiplier?: number) {

if(multiplier === undefined ){
return value * 2
}

if(multiplier !== undefined) {
    return value * multiplier
  }
 if(value && undefined){
    return undefined
 }
}
