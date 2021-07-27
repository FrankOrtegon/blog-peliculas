package co.com.sofka.config;

import co.com.sofka.model.publication.gateways.PublicationRepository;
import co.com.sofka.usecase.publication.AddCommentUseCase;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan(basePackages = "co.com.sofka.usecase",
        includeFilters = {
                @ComponentScan.Filter(type = FilterType.REGEX, pattern = "^.+UseCase$")
        },
        useDefaultFilters = false)
public class UseCasesConfig {
        public AddCommentUseCase addCommentary(PublicationRepository publicationRepository){
                return new AddCommentUseCase(publicationRepository);
        }

}
