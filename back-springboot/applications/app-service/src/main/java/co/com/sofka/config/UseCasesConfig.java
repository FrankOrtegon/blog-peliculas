package co.com.sofka.config;

import co.com.sofka.model.count.gateways.CountRepository;
import co.com.sofka.model.count.gateways.UserRepository;
import co.com.sofka.model.publication.gateways.CategoryRepository;
import co.com.sofka.model.publication.gateways.CommentRepository;
import co.com.sofka.usecase.count.AddCountUseCase;
import co.com.sofka.usecase.count.AddUserUseCase;
import co.com.sofka.usecase.count.GetCountUseCase;
import co.com.sofka.usecase.count.UpdateCountUseCase;
import co.com.sofka.usecase.publication.AddCategoryUseCase;
import co.com.sofka.usecase.publication.AddCommentUseCase;
import co.com.sofka.usecase.publication.UpdateCategoryUseCase;
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

    public AddCommentUseCase addCommentary(CommentRepository commentRepository) {
        return new AddCommentUseCase(commentRepository);
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

    public AddCategoryUseCase addCategory(CategoryRepository categoryRepository){
        return new AddCategoryUseCase(categoryRepository);
    }

    public UpdateCategoryUseCase updateCategory(CategoryRepository categoryRepository){
        return new UpdateCategoryUseCase(categoryRepository);
    }

}
