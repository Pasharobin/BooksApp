import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(books, value) {
        return books.filter(book => book.name.toLowerCase().includes(value.toLowerCase()));
    }
}