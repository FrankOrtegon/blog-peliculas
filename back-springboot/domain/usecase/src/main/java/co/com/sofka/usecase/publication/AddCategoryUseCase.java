package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.gateways.CategoryRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddCategoryUseCase {

    private final CategoryRepository categoryRepository;

    public Category addCategory(Category category){
        return categoryRepository.addCategory(category);
    }
}
