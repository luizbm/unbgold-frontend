
import { Pipe, PipeTransform } from "@angular/core";
import { Turma } from "../turma";

@Pipe({
    name: 'mwFilterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform{
  transform(turmas: Turma[], descriptionFilter: string) {

    descriptionFilter = descriptionFilter
        .trim()
        .toLowerCase();

    if (descriptionFilter) {
        return turmas.filter( turma =>
            turma.descricao.toLowerCase().includes(descriptionFilter)
        );
    } else {
        return turmas;
    }
  }
}
