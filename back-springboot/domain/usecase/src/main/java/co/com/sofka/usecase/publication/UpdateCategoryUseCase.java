package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.gateways.CategoryRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UpdateCategoryUseCase {

    private final CategoryRepository categoryRepository;

    public Category updateCategory(Category category){
        return categoryRepository.updateCategory(category);
    }
}
