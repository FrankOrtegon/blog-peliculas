package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.gateways.CategoryRepository;
import co.com.sofka.model.publication.values.IdCategory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteCategoryUseCase {

    private final CategoryRepository categoryRepository;

    public void deleteCateogry(String idCategory){
        categoryRepository.deleteByIdCateogry(idCategory);
    }
}
