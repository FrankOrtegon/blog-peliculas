package co.com.sofka.api;
import co.com.sofka.model.publication.entity.Comment;
import co.com.sofka.usecase.publication.AddCommentUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
    private final AddCommentUseCase addCommentUseCase;


    @PostMapping(path = "/add")
    public Comment addCommentary(@RequestBody Comment comment) {
      return addCommentUseCase.addComment(comment);
    }
}
