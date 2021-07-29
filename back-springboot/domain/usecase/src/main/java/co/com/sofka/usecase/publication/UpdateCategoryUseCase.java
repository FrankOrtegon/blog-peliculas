package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UpdateCategoryUseCase {

    private final PublicationRepository publicationRepository;

    public Category updateCategory(Category category){
        return publicationRepository.updateCategory(category);
    }
}
