package co.com.sofka.api;

import co.com.sofka.api.count.CountDTO;
import co.com.sofka.api.count.CountMapper;
import co.com.sofka.api.count.UserDTO;
import co.com.sofka.api.count.UserMapper;
import co.com.sofka.api.publication.CategoryDTO;
import co.com.sofka.api.publication.CategoryMapper;
import co.com.sofka.api.publication.CommentDTO;
import co.com.sofka.api.publication.CommentMapper;
import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.User;
import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.usecase.count.AddCountUseCase;
import co.com.sofka.usecase.count.AddUserUseCase;
import co.com.sofka.usecase.count.GetCountUseCase;
import co.com.sofka.usecase.count.UpdateCountUseCase;
import co.com.sofka.usecase.publication.AddCategoryUseCase;
import co.com.sofka.usecase.publication.AddCommentUseCase;
import co.com.sofka.usecase.publication.DeleteCategoryUseCase;
import co.com.sofka.usecase.publication.UpdateCategoryUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
    private final AddCommentUseCase addCommentUseCase;
    private final CommentMapper commentMapper;

    private final AddCountUseCase addCountUseCase;
    private final UpdateCountUseCase updateCountUseCase;
    private final GetCountUseCase getCountUseCase;
    private final CountMapper countMapper;
    private final CategoryMapper categoryMapper;
    private final AddCategoryUseCase addCategoryUseCase;
    private final UpdateCategoryUseCase updateCategoryUseCase;
    private final DeleteCategoryUseCase deleteCategoryUseCase;

    private final AddUserUseCase addUserUseCase;
    private final UserMapper userMapper;


    @PostMapping(path = "/add")
    public CommentDTO addCommentary(@RequestBody CommentDTO commentDTO) {
        Comment comment = commentMapper.fromToModel(commentDTO);
        return commentMapper.fromDTO(addCommentUseCase.addComment(comment));
    }

    @PostMapping(path = "/add/count")
    public CountDTO addCount(@RequestBody CountDTO countDTO) {
        Count count = countMapper.fromModel(countDTO);
        return countMapper.fromDTO(addCountUseCase.addCount(count));
    }

    @PutMapping(path = "/update/count")
    public CountDTO updateCount(@RequestBody CountDTO countDTO) {
        Count count = countMapper.fromModel(countDTO);
        return countMapper.fromDTO(updateCountUseCase.updateCount(count));
    }

    @GetMapping(path = "/get/count/{id}")
    public CountDTO getCount(@PathVariable("id") String idCount) {
        return countMapper.fromDTO(getCountUseCase.getCount(idCount));
    }

    @PostMapping(path = "/add/user")
    public UserDTO addUser(@RequestBody UserDTO userDTO) {
        User user = userMapper.fromModel(userDTO);
        return userMapper.fromDTO(addUserUseCase.addUser(user));
    }

    @PostMapping(path = "/add/category")
    public CategoryDTO addCategory(@RequestBody CategoryDTO categoryDTO){
        Category category = categoryMapper.fromToModel(categoryDTO);
        return categoryMapper.fromDTO(addCategoryUseCase.addCategory(category));
    }

    @PutMapping(path = "/update/category")
    public CategoryDTO updateCategory(@RequestBody CategoryDTO categoryDTO){
        Category category = categoryMapper.fromToModel(categoryDTO);
        return categoryMapper.fromDTO(updateCategoryUseCase.updateCategory(category));
    }

    @DeleteMapping(path = "/delete/category/{id}")
    public void deleteCategory(@PathVariable("id") String idCategory){
        deleteCategoryUseCase.deleteCateogry(idCategory);
    }
}
