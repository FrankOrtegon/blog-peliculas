package co.com.sofka.model.publication.gateways;

import co.com.sofka.model.publication.Category;

public interface CategoryRepository {
    Category addCategory(Category category);
    Category updateCategory(Category category);
}
