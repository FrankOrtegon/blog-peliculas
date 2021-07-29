package co.com.sofka.config;

import co.com.sofka.model.count.gateways.CountRepository;
import co.com.sofka.model.count.gateways.UserRepository;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import co.com.sofka.usecase.count.AddCountUseCase;
import co.com.sofka.usecase.count.AddUserUseCase;
import co.com.sofka.usecase.count.GetCountUseCase;
import co.com.sofka.usecase.count.UpdateCountUseCase;
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

    public AddCommentUseCase addCommentary(PublicationRepository publicationRepository) {
        return new AddCommentUseCase(publicationRepository);
    }

    public AddCountUseCase addCountUseCase(CountRepository countRepository){
            return new AddCountUseCase(countRepository);
    }

    public UpdateCountUseCase updateCountUseCase(CountRepository countRepository){
        return new UpdateCountUseCase(countRepository);
    }

    public GetCountUseCase getCountUseCase(CountRepository countRepository){
        return new GetCountUseCase(countRepository);
    }

    public AddUserUseCase addUserUseCase(UserRepository userRepository){
        return new AddUserUseCase(userRepository);
    }


}
