import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class NumwordPipe implements PipeTransform {

  transform(num:number, firstP:string, secondP:string, thirdP:string):string {
    /*var dd=num%100;
        if ( (dd>=11) && (dd<=19) )
            return word5;
        var d=num%10;
        if ( d==1 )
            return word1;
        if ( (d>=2) && (d<=4) )
            return word2;
        return word5;*/
    let resultStr = "У вас "+num+" ";
    let dd:number=num%100;
    if ( (dd>=11) && (dd<=19) )
      return resultStr+thirdP;
    let d:number=num%10;
    if ( d==1 )
      return resultStr+firstP;
    if ( (d>=2) && (d<=4) )
      return resultStr+secondP;
    return resultStr+thirdP;
  }

}
