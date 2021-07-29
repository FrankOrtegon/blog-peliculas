package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddCategoryUseCase {

    private final PublicationRepository publicationRepository;

    public Category addCategory(Category category){
        return publicationRepository.addCategory(category);
    }
}
