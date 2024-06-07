import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter',
})
export class MyFilterPipe implements PipeTransform {
  transform(objs: any, term: any) {
    if (term === undefined) {
      return objs;
    }
    //     else{
    //       let T=[]
    //       for (let i = 0; i < objs.length; i++) {
    // if (objs[i].teamOne.toLowercase().includes(term.toLowercase())||objs[i].teamTwo.toLowercase().includes(term.toLowercase())||objs[i].scoreOne.toLowercase().includes(term.toLowercase())||objs[i].scoreTwo.toLowercase().includes(term.toLowercase())) {
    //   T.push(objs[i])

    // }
    //       }
    //       return T
    //     }
    return objs.filter((obj: any) => {
      return (
        obj.teamOne.toLowercase().includes(term.toLowercase()) ||
        obj.teamTwo.toLowercase().includes(term.toLowercase)
      );
    });
  }
}
