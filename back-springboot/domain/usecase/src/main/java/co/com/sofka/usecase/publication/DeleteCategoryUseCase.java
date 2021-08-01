package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.gateways.CategoryRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteCategoryUseCase {

    private final CategoryRepository categoryRepository;

    public void deleteCateogry(String idCategory){
        categoryRepository.deleteByIdCategory(idCategory);
    }
}
