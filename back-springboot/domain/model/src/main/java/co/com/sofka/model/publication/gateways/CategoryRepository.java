package co.com.sofka.model.publication.gateways;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.values.IdCategory;

public interface CategoryRepository {
    Category addCategory(Category category);
    Category updateCategory(Category category);
    void deleteByIdCateogry(IdCategory idCategory);
}
