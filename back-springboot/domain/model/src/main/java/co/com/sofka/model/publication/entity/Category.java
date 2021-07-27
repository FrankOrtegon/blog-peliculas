package co.com.sofka.model.publication.entity;

import co.com.sofka.model.publication.values.IdCategory;
import co.com.sofka.model.publication.values.TypeCategory;

public class Category {

    private IdCategory idCategory;
    private TypeCategory type;

    public Category() {
    }

    public Category(IdCategory idCategory, TypeCategory type) {
        this.idCategory = idCategory;
        this.type = type;
    }
}
